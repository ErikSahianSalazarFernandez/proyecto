import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCiudadesComponent } from './add-ciudades.component';

describe('AddCiudadesComponent', () => {
  let component: AddCiudadesComponent;
  let fixture: ComponentFixture<AddCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCiudadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
