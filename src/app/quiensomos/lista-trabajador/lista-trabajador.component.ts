import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trabajador } from '../trabajador';
@Component({
  selector: 'app-lista-trabajador',
  templateUrl: './lista-trabajador.component.html',
  styleUrls: ['./lista-trabajador.component.css']
})
export class ListaTrabajadorComponent implements OnInit {

  trabajador = [new trabajador(), new trabajador(), new trabajador()];
  @Output() informarEvent = new EventEmitter<trabajador>();
  constructor() { }

  ngOnInit() {
    this.trabajador[0].nombre = 'Alex';
    this.trabajador[0].apellidos = 'Rodriguez';
    this.trabajador[0].imagen = '';
    this.trabajador[0].descripcion = 'Un mandao';

    this.trabajador[1].nombre = 'Nelson';
    this.trabajador[1].apellidos = 'Perez';
    this.trabajador[1].imagen='https://picsum.photos/300/200';
    this.trabajador[1].descripcion = 'El puto amo';

    this.trabajador[2].nombre = 'Valenti';
    this.trabajador[2].apellidos = 'Casas';
    this.trabajador[2].imagen = 'https://picsum.photos/200/300';
    this.trabajador[2].descripcion = 'El puto amo';
}

  informarTrabajador(event) {
    this.informarEvent.emit(event);
  }
}
