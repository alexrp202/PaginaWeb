import { Component, OnInit, Input } from '@angular/core';
import {trabajador} from '../trabajador'
@Component({
  selector: 'app-detalle-trabajador',
  templateUrl: './detalle-trabajador.component.html',
  styleUrls: ['./detalle-trabajador.component.css']
})
export class DetalleTrabajadorComponent implements OnInit {

  @Input() trabajador: trabajador;

  constructor() { }

  ngOnInit(): void {
    this.trabajador = new trabajador();
    this.trabajador.nombre = '';
    this.trabajador.apellidos = '';
    this.trabajador.imagen = '';
    this.trabajador.descripcion = '';
  }

}
