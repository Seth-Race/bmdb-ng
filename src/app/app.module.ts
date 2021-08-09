import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './features/movie/movie-list.component';
import { ActorListComponent } from './features/actor/actor-list.component';
import { CreditListComponent } from './features/credit/credit-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { MovieCreateComponent } from './features/movie/movie-create/movie-create.component';
import { MovieEditComponent } from './features/movie/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './features/movie/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    CreditListComponent,
    MenuComponent,
    MovieCreateComponent,
    MovieEditComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
