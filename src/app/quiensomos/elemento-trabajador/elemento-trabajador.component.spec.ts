import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoTrabajadorComponent } from './elemento-trabajador.component';

describe('ElementoTrabajadorComponent', () => {
  let component: ElementoTrabajadorComponent;
  let fixture: ComponentFixture<ElementoTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoTrabajadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
