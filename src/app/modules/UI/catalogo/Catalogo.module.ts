import { ApiAutosComponent } from './api-autos/api-autos.component';
import { CatalogoRoutingComponent } from './Catalogo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingComponent
  ],
  declarations: [
    ApiAutosComponent
  ]
})

export class CatalogoModule { }
