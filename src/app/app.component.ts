import { Component } from '@angular/core';
import {VideosService} from './services/videos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'video-player-tizen';

  constructor(private readonly videosService: VideosService) {
  }

  update(): void {
    this.videosService.updateVideos();
  }
}
