import { Component, OnInit } from '@angular/core';
import { eventos } from '../models/eventos.model'
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {

  listaeventos: eventos[] = []
  listaeventos_prueba: eventos[] = []


  constructor() { }

  ngOnInit(): void {
  }

  addEvento(nEvent){
    this.listaeventos.push(nEvent)
  }


  cont_1;
  Editar(posicion,nombre,ubicacion,correo,desripcion){

    for (let item of this.listaeventos){
      // this.cont_1++;
      this.cont_1 = this.listaeventos.indexOf.length;
      if(nombre == item.nombre && posicion == posicion){


      }

  }

  }
Borrar(posicion){
this.listaeventos.splice(posicion,1);

// this.listaeventos;
}

}
