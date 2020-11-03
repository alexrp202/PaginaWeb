import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { EventosComponent } from './eventos/eventos.component';
import { QuiensomosComponent } from './quiensomos/quiensomos.component';
import { AltaComponent } from './alta/alta.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'header', component: HeaderComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'eventos', component: EventosComponent},
  { path: 'quiensomos', component: QuiensomosComponent },
  { path: 'alta', component: AltaComponent },
  { path: 'modificar', component: ModificarComponent},
  { path: 'eliminar', component:EliminarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
