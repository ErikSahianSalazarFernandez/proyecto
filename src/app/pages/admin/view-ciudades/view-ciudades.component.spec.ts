import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCiudadesComponent } from './view-ciudades.component';

describe('ViewCiudadesComponent', () => {
  let component: ViewCiudadesComponent;
  let fixture: ComponentFixture<ViewCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCiudadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
