import { Observable } from "rxjs";
import { Autos } from "../autos";

export abstract class AutosGateway {
  abstract getByID(id: String): Observable<Autos>;
  abstract getAll(): Observable<Array<Autos>>;
  abstract saveNew (_aut : Autos) : Observable<void>;
}
