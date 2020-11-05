import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabajadorComponent } from './lista-trabajador.component';

describe('ListaTrabajadorComponent', () => {
  let component: ListaTrabajadorComponent;
  let fixture: ComponentFixture<ListaTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTrabajadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
