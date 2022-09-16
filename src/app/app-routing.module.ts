import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FeedComponent } from './feed/feed.component';
import { NewsComponent } from './news/news.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'scores', component: ScoresComponent },
  { path: 'news', component: NewsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'feed' },
  { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
