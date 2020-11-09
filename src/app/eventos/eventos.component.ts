import { Component, OnInit,Input } from '@angular/core';
import { eventos } from '../models/eventos.model'
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {


  listaeventos: eventos[] = []
  modificarmodelo: eventos;

  constructor() { }

  ngOnInit(): void {
  }

  addEvento(nEvent){
    this.modificarmodelo = undefined;
    this.listaeventos.push(nEvent)
  }


  Editar(item){
    this.modificarmodelo=item;
  }


Borrar(posicion){
this.listaeventos.splice(posicion,1);

// this.listaeventos;
}

}
