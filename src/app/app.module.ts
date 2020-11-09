import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { EventosComponent } from './eventos/eventos.component';
import { QuiensomosComponent } from './quiensomos/quiensomos.component';
import { AltaComponent } from './eventos/alta/alta.component';
import { ModificarComponent } from './eventos/modificar/modificar.component';
import { EliminarComponent } from './eventos/eliminar/eliminar.component';
import { DetalleTrabajadorComponent } from './quiensomos/detalle-trabajador/detalle-trabajador.component';
import { ElementoTrabajadorComponent } from './quiensomos/elemento-trabajador/elemento-trabajador.component';
import { ListaTrabajadorComponent } from './quiensomos/lista-trabajador/lista-trabajador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    EventosComponent,
    QuiensomosComponent,
    AltaComponent,
    ModificarComponent,
    EliminarComponent,
    DetalleTrabajadorComponent,
    ElementoTrabajadorComponent,
    ListaTrabajadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
