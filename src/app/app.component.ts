import { AutosApiServices } from './infraestructura/Autos/Autos-Api-Withou-Delay.service';
import { AutosApiServicesDocker } from './infraestructura/Autos/Autos-Api-With-Docker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  response$ ;
  datos;
  title = 'Web-Services';
  constructor (private _autosApiService : AutosApiServices) {}
  ngOnInit(): void {

  }
}
