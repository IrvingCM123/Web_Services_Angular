import { Glosario } from './../../models/Glosario/InfoGlosario';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlosarioGateway } from '../../models/Glosario/Gateway/Glosario-Gateway';

@Injectable({
  providedIn: 'root'
})

export class GetGlosarioCasosUso {
  constructor (private _GlosarioGateway: GlosarioGateway) {}

  getInfoByID (id: String) : Observable <Glosario> {
    return this._GlosarioGateway.getByID(id);
  }

  getAllInfo () : Observable <Array<Glosario>> {
    return this._GlosarioGateway.getAll();
  }

}





