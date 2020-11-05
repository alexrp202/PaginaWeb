import { Component, OnInit } from '@angular/core';
import { trabajador } from './trabajador';

@Component({
  selector: 'app-quiensomos',
  templateUrl: './quiensomos.component.html',
  styleUrls: ['./quiensomos.component.css']
})
export class QuiensomosComponent implements OnInit {
  trabajador = '';
  mostrar = true;
  constructor() { }

  ngOnInit(): void {
  }

  trabajadorSeleccionado: trabajador;
  cambiarTrabajador(trabajador) {
    this.trabajadorSeleccionado = trabajador;
  }
}
