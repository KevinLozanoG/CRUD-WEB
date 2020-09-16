import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarPersonaComponent } from './components/agregar-editar-persona/agregar-editar-persona.component';
import { ListPersonaComponent } from './components/list-persona/list-persona.component';
import { VerPersonaComponent } from './components/ver-persona/ver-persona.component';

const routes: Routes = [
  { path: 'agregar', component: AgregarEditarPersonaComponent },
  { path: 'editar/:id', component: AgregarEditarPersonaComponent },
  { path: 'ver/:id', component: VerPersonaComponent },
  { path: '', component: ListPersonaComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
