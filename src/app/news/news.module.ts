import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: NewsComponent }])
  ]
})
export class NewsModule { }
