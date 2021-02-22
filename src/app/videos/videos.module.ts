import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import {VideosRouting} from './videos.routing';
import {VideosService} from './videos.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    VideosRouting,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [VideosService]
})
export class VideosModule { }
