import { Component, OnChanges, Output, EventEmitter,Input,SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { eventos } from '../../models/eventos.model';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
})
export class AltaComponent implements OnChanges {
  @Output() altaEvento = new EventEmitter<eventos>();
  @Input() modificarmodelo:eventos;


  myForm: FormGroup;

  ModeloFormulario = new eventos('', '', '', '', '');

  mostrar: Boolean = false;
  contador: Number = 0;
  constructor(private _builder: FormBuilder) {
    this.myForm = this._builder.group({
      name: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(30), Validators.required])],
      Ubicacion: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(30), Validators.required])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      Descripcion: ['', Validators.compose([Validators.minLength(20), Validators.maxLength(50), Validators.required])],
      imagen: ['',  Validators.compose([Validators.required,Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?") ])],




    });
  }


  ngOnChanges(changes:SimpleChanges):void{
    if(this.modificarmodelo !== undefined){
      this.ModeloFormulario = this.modificarmodelo;
    }
  }

  EnviarDatos() {
    if(!this.modificarmodelo){
      this.altaEvento.emit(this.ModeloFormulario);
    }
    this.modificarmodelo = undefined;
    this.ModeloFormulario = new eventos('', '', '', '', '');
    this.myForm.reset();
  }

  Modificardatos(){
    this.ModeloFormulario = this.modificarmodelo
  }
}
