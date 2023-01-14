import { NgModule } from '@angular/core';
import { UIRoutingModule } from './UI-routing.module';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo';
import { InicioComponent } from './inicio';
import { MenuComponent } from './menu';

@NgModule({
  imports: [
    CommonModule,
    UIRoutingModule
  ],
  declarations: [
    CatalogoComponent,
    InicioComponent,
  ]
})

export class UIModule { }
