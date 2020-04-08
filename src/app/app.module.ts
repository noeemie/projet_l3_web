import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './titre/titre.component';
import { MeteoJourJComponent } from './meteo-jour-j/meteo-jour-j.component';
import { MeteoCinqJComponent } from './meteo-cinq-j/meteo-cinq-j.component';
import { ResultsComponent } from './results/results.component';
import { TwitterApiComponent } from './twitter-api/twitter-api.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    MeteoJourJComponent,
    MeteoCinqJComponent,
    ResultsComponent,
    TwitterApiComponent,
    CommentairesComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
