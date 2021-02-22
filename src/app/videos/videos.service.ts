import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {IVideo} from './video.interface';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VideosService {

  private readonly _videos$: Subject<IVideo[]> = new Subject();

  readonly total$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  readonly videos$: Observable<IVideo[]> = this._videos$.asObservable();

  constructor(private readonly http: HttpClient) {
  }

  loadVideos(page: number): void {
    this.http.get<{videos: IVideo[], total: number}>(`https://video-player-backend-christianopaets.vercel.app/videos?page=${page}&offset=${8}`)
      .subscribe(res => {
        this._videos$.next(res.videos);
        this.total$.next(res.total)
      })
  }
}
