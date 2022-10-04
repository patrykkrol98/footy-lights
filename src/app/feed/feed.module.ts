import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeUrlPipe } from './sanitize-url.pipe';
import { FeedComponent } from './feed.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SanitizeUrlPipe,
    FeedComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: FeedComponent }])
  ],
})
export class FeedModule { }
