import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAutosDistribuidoresComponent } from './api-autos-distribuidores.component';

describe('ApiAutosDistribuidoresComponent', () => {
  let component: ApiAutosDistribuidoresComponent;
  let fixture: ComponentFixture<ApiAutosDistribuidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiAutosDistribuidoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAutosDistribuidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
