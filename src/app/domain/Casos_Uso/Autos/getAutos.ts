import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Autos } from '../../models/Autos/autos';
import { AutosGateway } from '../../models/Autos/Gateway/Autos-Gateway';

@Injectable({
  providedIn: 'root'
})

export class GetAutosCasosUso {
  
  constructor (private _autosGateWay: AutosGateway) {}

  getAutosByID (id: String) : Observable <Autos> {
    return this._autosGateWay.getAutosByID(id);
  }

  getAllAutos () : Observable <Array<Autos>> {
    return this._autosGateWay.getAutosAll();
  }

}





