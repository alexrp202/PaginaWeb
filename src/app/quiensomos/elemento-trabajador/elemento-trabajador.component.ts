import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { trabajador } from '../trabajador';

@Component({
  selector: 'app-elemento-trabajador',
  templateUrl: './elemento-trabajador.component.html',
  styleUrls: ['./elemento-trabajador.component.css']
})
export class ElementoTrabajadorComponent implements OnInit {

  @Input() trabajador: trabajador;
  @Output() selectEvent = new EventEmitter<trabajador>();

  constructor() { }

  ngOnInit(): void {
  }

  trabajadorSelected(event) {
    this.selectEvent.emit(this.trabajador);
  }
}
