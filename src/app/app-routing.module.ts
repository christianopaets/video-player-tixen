import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/videos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
