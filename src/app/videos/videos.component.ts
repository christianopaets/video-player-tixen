import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {VideosService} from '../services/videos.service';
import {IVideo} from './video.interface';
import {MatDialog} from '@angular/material/dialog';
import {VideoModalComponent} from './modules/video-modal/video-modal.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosComponent implements OnInit {

  constructor(public readonly videosService: VideosService,
              private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.videosService.loadVideos(1);
  }

  openModal(video: IVideo): void {
    this.dialog.open(VideoModalComponent, {
      width: '80%',
      data: {
        video
      }
    })
  }

}
