import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiAutosComponent } from './modules/UI/catalogo/api-autos/api-autos.component';

const routes: Routes = [
  { path: '', redirectTo: 'Web_Services', pathMatch: 'full'},
  { path: 'Web_Services', loadChildren: () => import('./modules/UI').then(m => m.UIModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
