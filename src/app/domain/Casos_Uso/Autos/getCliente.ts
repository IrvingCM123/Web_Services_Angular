import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Clientes } from './../../models/Autos/clientes';
import { ClientesGateway } from '../../models/Autos/Gateway/Clientes-Gateway';

@Injectable({
  providedIn: 'root'
})

export class GetClientesCasosUso {

  constructor (private _clientesGateWay: ClientesGateway) {}

  getClientesByID (id: String) : Observable <Clientes> {
    return this._clientesGateWay.getClientesByID(id);
  }

  getClientesAll () : Observable <Array<Clientes>> {
    return this._clientesGateWay.getClientesAll();
  }

}





