import { Observable } from 'rxjs';
import { Distribuidores } from '../distribuidor';

export abstract class DistribuidoresGateway {

  abstract getDistribuidorByID (id : String) : Observable <Distribuidores>;
  abstract getDistribuidorAll() : Observable <Array<Distribuidores>>;
  abstract saveDistribuidorNew(_distribuidor : Distribuidores) : Observable<void>;

}
