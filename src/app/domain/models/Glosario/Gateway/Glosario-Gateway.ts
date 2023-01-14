import { Glosario } from './../InfoGlosario';
import { Observable } from "rxjs";

export abstract class GlosarioGateway {
  abstract getByID(id: String): Observable<Glosario>;
  abstract getAll(): Observable<Array<Glosario>>;
  abstract saveNew (_aut : Glosario) : Observable<void>;
}
