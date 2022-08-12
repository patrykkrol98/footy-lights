import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FeedComponent } from './feed/feed.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', pathMatch: 'full', redirectTo: 'feed' },
  { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
