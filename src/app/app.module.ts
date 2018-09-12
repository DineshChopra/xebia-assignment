import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlanetSearchComponent } from './planet/planet-search/planet-search.component';
import { PlanetListComponent } from './planet/planet-list/planet-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanetComponent } from './planet/planet.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlanetComponent,
    PlanetSearchComponent,
    PlanetListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
