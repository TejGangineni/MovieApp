import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UpMovieListComponent} from './Components/UpcomingMovie/upmovie-list.component';
import {TopMovieListComponent} from './Components/TopRateMovie/topmovie-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
const routes: Routes = [
{path: 'upcoming', component: UpMovieListComponent},
{path: 'toprated', component: TopMovieListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UpMovieListComponent,
    TopMovieListComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {enableTracing:true}),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
