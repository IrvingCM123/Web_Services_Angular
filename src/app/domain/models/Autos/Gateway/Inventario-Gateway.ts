import { Observable } from 'rxjs';
import { Inventario } from '../inventario';

export abstract class InventarioGateway {

  abstract getInventarioByID (id : String) : Observable <Inventario>;
  abstract getInventarioAll () : Observable <Array<Inventario>>;
  abstract saveInventarioNew (_inventario : Inventario) : Observable<void>;

}
