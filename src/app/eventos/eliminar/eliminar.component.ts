import { Component, OnInit, EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  mensaje: string;

  @Output() propagar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

onPropagar() {
    this.propagar.emit(this.mensaje);
  }
}