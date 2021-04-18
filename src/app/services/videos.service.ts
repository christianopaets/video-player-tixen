import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {IVideo} from '../videos/video.interface';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VideosService {

  private readonly _videos$: Subject<IVideo[]> = new Subject();

  readonly total$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  readonly videos$: Observable<IVideo[]> = this._videos$.asObservable();

  constructor(private readonly http: HttpClient) {
  }

  loadVideos(page: number): void {
    this.http.get<{videos: IVideo[], total: number}>(`https://masterchef.ml/videos?page=${page}&offset=${8}&time=${Date.now()}`)
      .subscribe(res => {
        this._videos$.next(res.videos);
        this.total$.next(res.total)
      })
  }

  updateVideos(): void {
    this.http.post<IVideo[]>(`https://masterchef.ml/videos`, {})
      .subscribe();
  }
}
