import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IlustracionComponent } from './components/ilustracion/ilustracion.component';
import { EscrituraComponent } from './components/escritura/escritura.component';
import { ModeladoComponent } from './components/modelado/modelado.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { RibbonellaComponent } from './components/escritura/ribbonella/ribbonella.component';
import { RocketManComponent } from './components/escritura/rocket-man/rocket-man.component';
import { LaIslaMecanicaComponent } from './components/escritura/la-isla-mecanica/la-isla-mecanica.component';
import { BackComponent } from './components/back/back.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ResumenComponent } from './components/escritura/pacemaker/resumen/resumen.component';
import { HistoriaComponent } from './components/escritura/pacemaker/historia/historia.component';
import { NearthComponent } from './components/escritura/pacemaker/nearth/nearth.component';
import { PersonajesComponent } from './components/escritura/pacemaker/personajes/personajes.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ScrollPositionDirective } from './directives/scroll-position.directive';

@NgModule({
  declarations: [
    AppComponent,
    IlustracionComponent,
    EscrituraComponent,
    ModeladoComponent,
    HomeComponent,
    NavComponent,
    RibbonellaComponent,
    RocketManComponent,
    LaIslaMecanicaComponent,
    BackComponent,
    SidebarComponent,
    ResumenComponent,
    HistoriaComponent,
    NearthComponent,
    PersonajesComponent,
    ScrollPositionDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
