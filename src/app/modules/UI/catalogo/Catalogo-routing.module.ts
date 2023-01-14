import { ApiAutosComponent } from './api-autos/api-autos.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogoComponent } from './catalogo.component';

const routes: Routes = [
  { path: '', redirectTo: 'Mostrar', pathMatch: 'full' },
  { path: 'Mostrar', component: CatalogoComponent },
  { path: 'Api_Autos', loadChildren: () => import('./api-autos').then(a => a.AutosModule) }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoRoutingComponent {}

