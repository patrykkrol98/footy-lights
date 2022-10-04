import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ScoresModule } from './scores/scores.module';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    PathNotFoundComponent,
    ToolbarComponent,
    BottomNavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    AuthModule,
    ScoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
