import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAutosNavegacionComponent } from './api-autos-navegacion.component';

describe('ApiAutosNavegacionComponent', () => {
  let component: ApiAutosNavegacionComponent;
  let fixture: ComponentFixture<ApiAutosNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiAutosNavegacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAutosNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
