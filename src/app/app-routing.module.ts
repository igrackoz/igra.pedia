import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlustracionComponent } from './components/ilustracion/ilustracion.component';
import { EscrituraComponent } from './components/escritura/escritura.component';

// PACEMAKER
// -----------------------------------------------------------------------------------------------------
import { ResumenComponent } from './components/escritura/pacemaker/resumen/resumen.component';
import { HistoriaComponent } from './components/escritura/pacemaker/historia/historia.component';
import { PersonajesComponent } from './components/escritura/pacemaker/personajes/personajes.component';
import { NearthComponent } from './components/escritura/pacemaker/nearth/nearth.component';
// -----------------------------------------------------------------------------------------------------


import { RibbonellaComponent } from './components/escritura/ribbonella/ribbonella.component';
import { RocketManComponent } from './components/escritura/rocket-man/rocket-man.component';
import { LaIslaMecanicaComponent } from './components/escritura/la-isla-mecanica/la-isla-mecanica.component';
import { ModeladoComponent } from './components/modelado/modelado.component';
import { HomeComponent } from './components/home/home.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [

  { path: 'inicio', component: NavComponent },
  { path: 'ilustraciones', component: NavComponent },
  { path: 'escritura', component: NavComponent },
  { path: 'modelado', component: NavComponent },

  // PACEMAKER
  // -----------------------------------------------------------------------------------------------------
  { path: 'escritura/pacemaker', component: SidebarComponent },
  { path: 'escritura/pacemaker/historia', component: SidebarComponent },
  { path: 'escritura/pacemaker/personajes', component: SidebarComponent },
  { path: 'escritura/pacemaker/sistema-de-poder-nearth', component: SidebarComponent },
  // -----------------------------------------------------------------------------------------------------
  
  { path: 'escritura/one-shots', component: RibbonellaComponent },
  { path: 'escritura/ribbonella', component: RibbonellaComponent },
  { path: 'escritura/rocket-man', component: RocketManComponent },
  { path: 'escritura/la-isla-mecanica', component: LaIslaMecanicaComponent },

  
  { path: 'escritura/historias-cortas', component: RibbonellaComponent },
  
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
