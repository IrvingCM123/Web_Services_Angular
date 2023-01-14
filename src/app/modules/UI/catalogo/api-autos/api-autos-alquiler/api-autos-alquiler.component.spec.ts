import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAutosAlquilerComponent } from './api-autos-alquiler.component';

describe('ApiAutosAlquilerComponent', () => {
  let component: ApiAutosAlquilerComponent;
  let fixture: ComponentFixture<ApiAutosAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiAutosAlquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAutosAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
