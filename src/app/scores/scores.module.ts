import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoresComponent } from './scores.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ScoresComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: ScoresComponent }])
  ]
})
export class ScoresModule { }
