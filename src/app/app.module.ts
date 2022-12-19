import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IlustracionComponent } from './components/ilustracion/ilustracion.component';
import { EscrituraComponent } from './components/escritura/escritura.component';
import { ModeladoComponent } from './components/modelado/modelado.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PacemakerComponent } from './components/escritura/pacemaker/pacemaker.component';
import { RibbonellaComponent } from './components/escritura/ribbonella/ribbonella.component';
import { RocketManComponent } from './components/escritura/rocket-man/rocket-man.component';
import { LaIslaMecanicaComponent } from './components/escritura/la-isla-mecanica/la-isla-mecanica.component';
import { BackComponent } from './components/back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    IlustracionComponent,
    EscrituraComponent,
    ModeladoComponent,
    HomeComponent,
    NavComponent,
    PacemakerComponent,
    RibbonellaComponent,
    RocketManComponent,
    LaIslaMecanicaComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
