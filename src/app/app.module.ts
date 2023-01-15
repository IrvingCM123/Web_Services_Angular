import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './modules/UI/menu/menu.component';

import { AutosApiServices } from './infraestructura/Autos/Autos-Api-Withou-Delay.service';
import { AutosApiServicesDocker,ClientesApiServicesDocker,DistribuidoresApiServicesDocker,InventarioApiServicesDocker } from './infraestructura/Autos/Autos-Api-With-Docker.service';

import { InventarioGateway } from 'src/app/domain/models/Autos/Gateway/Inventario-Gateway';
import { ClientesGateway } from 'src/app/domain/models/Autos/Gateway/Clientes-Gateway';
import { DistribuidoresGateway } from 'src/app/domain/models/Autos/Gateway/Distribuidor-Gateway';
import { AutosGateway } from './domain/models/Autos/Gateway/Autos-Gateway';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: ClientesGateway , useClass: ClientesApiServicesDocker},
    {provide: DistribuidoresGateway, useClass: DistribuidoresApiServicesDocker},
    {provide: AutosGateway, useClass: AutosApiServicesDocker},
    {provide: InventarioGateway, useClass: InventarioApiServicesDocker}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
