import { Component, OnInit } from '@angular/core';
import { GetClientesCasosUso } from 'src/app/domain/Casos_Uso/Autos/getCliente';
@Component({
  selector: 'app-api-autos-clientes',
  templateUrl: './api-autos-clientes.component.html',
  styleUrls: ['./api-autos-clientes.component.scss']
})
export class ApiAutosClientesComponent implements OnInit {

  public Clientes: Array<any> = [];

  constructor( private _getClientesCasosUso : GetClientesCasosUso) { }
  response$ ;
  datos;

  ngOnInit(): void {
    this.response$ = this._getClientesCasosUso.getClientesAll();
    this.response$.subscribe( (Resp: any) => { this.Clientes = Resp } )

  }

}
