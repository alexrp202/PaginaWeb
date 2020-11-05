import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {eventos} from '../../models/eventos.model'


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  @Output() altaEvento = new EventEmitter<eventos>();


  mostrar:Boolean = false;
  contador:Number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  erDNI = "^[0-9]{8}[A-Za-z]{1}$]";
  MostrarInfo = "";
  MostrarInfo2 = "";


  EnviarDatos(nombre,ubicacion,correo,descripcion,contador){

    contador=0;
    if(nombre.value==""){
      alert("El nombre esta vacio");
      contador++;
    }
  if(descripcion.length<2){
    this.MostrarInfo2="La descripcion tiene muy pocos caracteres"
    contador++;
  }


if(contador==0){
  this.altaEvento.emit(new eventos(nombre,ubicacion,correo,descripcion));
}
else{
  alert("Te faltan parametros");
}


  }


}
