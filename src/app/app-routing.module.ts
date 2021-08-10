import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListComponent } from './features/actor/actor-list.component';
import { CreditListComponent } from './features/credit/credit-list.component';
import { MovieCreateComponent } from './features/movie/movie-create/movie-create.component';
import { MovieDetailComponent } from './features/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './features/movie/movie-edit/movie-edit.component';
import { MovieListComponent } from './features/movie/movie-list/movie-list.component';

const routes: Routes = [
  { path:'', redirectTo:'/movie-list', pathMatch: 'full'},
  { path:'movie-list', component: MovieListComponent},
  { path: 'movie-detail/:id', component: MovieDetailComponent},
  { path: 'movie-edit/:id', component: MovieEditComponent},
  { path: 'movie-create', component: MovieCreateComponent},
  { path:'actor-list', component: ActorListComponent},
  { path:'credit-list', component: CreditListComponent},
  { path:'**', component: MovieListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
