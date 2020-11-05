import { Component, OnInit, EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  nombre = 'Rodriguez Pablo';
  edad = 10;
  sueldos = [1700, 1600, 1900];
  mensaje: string;



  @Output() propagar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


}
