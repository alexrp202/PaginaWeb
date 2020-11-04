import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  erDNI = "^[0-9]{8}[A-Za-z]{1}$]";
  MostrarInfo = "";
  MostrarInfo2 = "";
  EnviarDatos(nombre,ubicacion,email,descripcion){

    if(nombre.value==""){
      alert("El nombre esta vacio");
    }
  if(descripcion.length<2){
    this.MostrarInfo2="La descripcion tiene muy pocos caracteres"
  }




  }
}
