import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAutosInventarioComponent } from './api-autos-inventario.component';

describe('ApiAutosInventarioComponent', () => {
  let component: ApiAutosInventarioComponent;
  let fixture: ComponentFixture<ApiAutosInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiAutosInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAutosInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
