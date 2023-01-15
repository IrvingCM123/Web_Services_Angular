import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Distribuidores } from '../../models/Autos/distribuidor';
import { DistribuidoresGateway } from '../../models/Autos/Gateway/Distribuidor-Gateway';

@Injectable({
  providedIn: 'root'
})

export class GetDistribuidoresCasosUso {

  constructor (private _distribuidoresGateWay: DistribuidoresGateway) {}

  getDistribuidorByID (id: String) : Observable <Distribuidores> {
    return this._distribuidoresGateWay.getDistribuidorByID(id);
  }

  getDistribuidorAll () : Observable <Array<Distribuidores>> {
    return this._distribuidoresGateWay.getDistribuidorAll();
  }

}


