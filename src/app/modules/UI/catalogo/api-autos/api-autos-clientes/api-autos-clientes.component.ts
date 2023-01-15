import { Component, OnInit } from '@angular/core';
import { GetAutosCasosUso } from 'src/app/domain/Casos_Uso/Autos/getAutos';

@Component({
  selector: 'app-api-autos-clientes',
  templateUrl: './api-autos-clientes.component.html',
  styleUrls: ['./api-autos-clientes.component.scss']
})
export class ApiAutosClientesComponent implements OnInit {

  public Clientes: Array<any> = [];

  constructor( private _getClientesCasosUso : GetAutosCasosUso) { }

  ngOnInit(): void {
  }

}
