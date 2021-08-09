import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListComponent } from './features/actor/actor-list.component';
import { CreditListComponent } from './features/credit/credit-list.component';
import { MovieListComponent } from './features/movie/movie-list.component';

const routes: Routes = [
  { path:'', redirectTo:'/movie-list', pathMatch: 'full'},
  { path:'movie-list', component: MovieListComponent},
  { path:'actor-list', component: ActorListComponent},
  { path:'credit-list', component: CreditListComponent},
  { path:'**', component: MovieListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
