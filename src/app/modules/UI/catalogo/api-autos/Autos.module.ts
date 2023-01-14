import { ApiAutosInventarioComponent } from './api-autos-inventario/api-autos-inventario.component';
import { ApiAutosDistribuidoresComponent } from './api-autos-distribuidores/api-autos-distribuidores.component';
import { ApiAutosClientesComponent } from './api-autos-clientes/api-autos-clientes.component';
import { ApiAutosAlquilerComponent } from './api-autos-alquiler/api-autos-alquiler.component';
import { NgModule } from '@angular/core';
import { AutosRoutingModule } from './Autos-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AutosRoutingModule
  ],
  declarations: [
    ApiAutosAlquilerComponent,
    ApiAutosClientesComponent,
    ApiAutosDistribuidoresComponent,
    ApiAutosInventarioComponent
  ]
})

export class AutosModule { }

