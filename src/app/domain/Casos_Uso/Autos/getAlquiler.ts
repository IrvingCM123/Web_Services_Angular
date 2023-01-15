import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Inventario } from '../../models/Autos/inventario';
import { InventarioGateway } from '../../models/Autos/Gateway/Inventario-Gateway';

@Injectable({
  providedIn: 'root'
})

export class GetInventarioCasosUso {

  constructor (private _inventarioGateWay: InventarioGateway) {}

  getInventarioByID (id: String) : Observable <Inventario> {
    return this._inventarioGateWay.getInventarioByID(id);
  }

  getInventarioAll () : Observable <Array<Inventario>> {
    return this._inventarioGateWay.getInventarioAll();
  }

}

