import {RouterModule, Routes} from '@angular/router';
import {VideosComponent} from './videos.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: VideosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class VideosRouting {
}
