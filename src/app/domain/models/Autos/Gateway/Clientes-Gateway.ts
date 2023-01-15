import { Observable } from "rxjs";
import { Clientes } from "../clientes";

export abstract class  ClientesGateway {

  abstract getClientesByID (id : String) : Observable <Clientes>;
  abstract getClientesAll() : Observable <Array<Clientes>>;
  abstract saveClientesNew(_cliente : Clientes) : Observable<void>;

}
