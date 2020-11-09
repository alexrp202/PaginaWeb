import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { eventos } from '../../models/eventos.model';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  @Output() modEvento = new EventEmitter<eventos>();

  myForm: FormGroup;

  ModeloFormulario = new eventos('', '', '', '', '');

  mostrar: Boolean = false;
  contador: Number = 0;
  constructor(private _builder: FormBuilder) {
    this.myForm = this._builder.group({
      name: ['', [Validators.required]],
      Ubicacion: ['', [Validators.required]],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      Descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  erDNI = '^[0-9]{8}[A-Za-z]{1}$]';
  MostrarInfo = '';
  MostrarInfo2 = '';

  reset() {}

  EnviarDatos() {
    //   contador=0;
    //   if(nombre.value==""){
    //     alert("El nombre esta vacio");
    //     contador++;
    //   }
    // if(descripcion.length<2){
    //   this.MostrarInfo2="La descripcion tiene muy pocos caracteres"
    //   contador++;
    // }

    this.modEvento.emit(this.ModeloFormulario);
    this.ModeloFormulario = new eventos('', '', '', '', '');
  }
}
