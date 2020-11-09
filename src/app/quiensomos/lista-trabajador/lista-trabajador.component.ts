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
    this.trabajador[0].asignacion='Alumno'
    this.trabajador[0].nombre = 'Alex';
    this.trabajador[0].apellidos = 'Rodriguez Piñeiro';
    this.trabajador[0].imagen = '';
    this.trabajador[0].descripcion = 'Un mandao';

    this.trabajador[1].asignacion='Maestro'
    this.trabajador[1].nombre = 'Nelson';
    this.trabajador[1].apellidos = 'Perez Varona';
    this.trabajador[1].imagen='https://media-exp1.licdn.com/dms/image/C5603AQHPbOMSG7sYzQ/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=AeOyxWC5ZKEVP5pMfsa1OT-9fWUNrRMDVYbFyWS7zd0';
    this.trabajador[1].descripcion = 'El puto amo';

    this.trabajador[2].asignacion='Maestro'
    this.trabajador[2].nombre = 'Valenti';
    this.trabajador[2].apellidos = 'Casas Diaz';
    this.trabajador[2].imagen = 'https://media-exp1.licdn.com/dms/image/C4D03AQED5eAQXoEP0g/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=klkjxb36K_kY1SdoFdvhFBV-yKC157aP7YHHcvw_MNs';
    this.trabajador[2].descripcion = 'El puto amo';
}

  informarTrabajador(event) {
    this.informarEvent.emit(event);
  }
}
