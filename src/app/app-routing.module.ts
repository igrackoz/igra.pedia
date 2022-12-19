import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlustracionComponent } from './components/ilustracion/ilustracion.component';
import { EscrituraComponent } from './components/escritura/escritura.component';
import { PacemakerComponent } from './components/escritura/pacemaker/pacemaker.component';
import { RibbonellaComponent } from './components/escritura/ribbonella/ribbonella.component';
import { RocketManComponent } from './components/escritura/rocket-man/rocket-man.component';
import { LaIslaMecanicaComponent } from './components/escritura/la-isla-mecanica/la-isla-mecanica.component';
import { ModeladoComponent } from './components/modelado/modelado.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'ilustraciones', component: IlustracionComponent },
  { path: 'escritura', component: EscrituraComponent },
  { path: 'escritura/pacemaker', component: PacemakerComponent },
  { path: 'escritura/ribbonella', component: RibbonellaComponent },
  { path: 'escritura/rocket-man', component: RocketManComponent },
  { path: 'escritura/la-isla-mecanica', component: LaIslaMecanicaComponent },
  { path: 'modelado', component: ModeladoComponent },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
