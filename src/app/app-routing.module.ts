import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'feed', loadChildren: () => import('./feed/feed.module').then((m) => m.FeedModule) },
  { path: 'scores', loadChildren: () => import('./scores/scores.module').then((m) => m.ScoresModule) },
  { path: 'news', loadChildren: () => import('./news/news.module').then((m) => m.NewsModule) },
  { path: '', pathMatch: 'full', redirectTo: 'feed' },
  { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
