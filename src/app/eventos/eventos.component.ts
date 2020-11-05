import { Component, OnInit } from '@angular/core';
import { eventos } from '../models/eventos.model'
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {

  listaeventos: eventos[] = []


  constructor() { }

  ngOnInit(): void {
  }

  addEvento(nEvent){
    this.listaeventos.push(nEvent)
  }


}
