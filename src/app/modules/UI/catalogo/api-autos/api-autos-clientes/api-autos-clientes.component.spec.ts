import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAutosClientesComponent } from './api-autos-clientes.component';

describe('ApiAutosClientesComponent', () => {
  let component: ApiAutosClientesComponent;
  let fixture: ComponentFixture<ApiAutosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiAutosClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAutosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
