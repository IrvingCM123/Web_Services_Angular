import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiAutosAlquilerComponent } from './api-autos-alquiler/api-autos-alquiler.component';
import { ApiAutosClientesComponent } from './api-autos-clientes/api-autos-clientes.component';
import { ApiAutosDistribuidoresComponent } from './api-autos-distribuidores/api-autos-distribuidores.component';
import { ApiAutosInventarioComponent } from './api-autos-inventario/api-autos-inventario.component';
import { ApiAutosComponent } from './api-autos.component';

const routes: Routes = [
  { path: '', redirectTo: 'Elegir', pathMatch: 'full' },
  { path: 'Elegir', component: ApiAutosComponent},
  { path: 'Alquiler', component: ApiAutosAlquilerComponent },
  { path: 'Clientes', component: ApiAutosClientesComponent },
  { path: 'Distribuidores', component: ApiAutosDistribuidoresComponent },
  { path: 'Autos', component: ApiAutosInventarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule {}
