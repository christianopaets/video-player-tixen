import {Component, ChangeDetectionStrategy, Inject, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IVideo} from '../../video.interface';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoModalComponent implements AfterViewInit {

  @ViewChild('video')
  protected readonly video!: ElementRef<HTMLVideoElement>;

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: {video: IVideo}) { }

  ngAfterViewInit(): void {
    const time = localStorage.getItem(this.data.video.url);
    this.video.nativeElement.addEventListener('loadedmetadata', () => {
      this.video.nativeElement.currentTime = time ? +time : 0;
    });
    this.video.nativeElement.addEventListener('timeupdate', () => {
      localStorage.setItem(this.data.video.url, Math.floor(this.video.nativeElement.currentTime).toString());
    })
  }

}
