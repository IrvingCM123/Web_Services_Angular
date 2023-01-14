import { AutosApiServices } from './infraestructura/Autos/Autos-Api-Withou-Delay.service';
import { AutosApiServicesDocker } from './infraestructura/Autos/Autos-Api-With-Docker.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AutosGateway } from './domain/models/Autos/Gateway/Autos-Gateway';
import { MenuComponent } from './modules/UI/menu/menu.component';
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
  ],
  providers: [{provide: AutosGateway, useClass: AutosApiServicesDocker}],
  bootstrap: [AppComponent]
})
export class AppModule { }
