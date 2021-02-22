import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoModalComponent } from './video-modal.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [VideoModalComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class VideoModalModule { }
