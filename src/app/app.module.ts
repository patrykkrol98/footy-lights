import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { FeedComponent } from './feed/feed.component';
import { MaterialModule } from './material/material.module';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SanitizeUrlPipe } from './feed/sanitize-url.pipe';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NewsComponent } from './news/news.component';
import { ScoresComponent } from './scores/scores.component';

@NgModule({
  declarations: [
    AppComponent,
    PathNotFoundComponent,
    FeedComponent,
    AuthComponent,
    SanitizeUrlPipe,
    ToolbarComponent,
    NewsComponent,
    ScoresComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
