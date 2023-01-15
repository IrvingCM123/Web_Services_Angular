import { Observable } from "rxjs";
import { Autos } from "../autos";

export abstract class AutosGateway {
  abstract getAutosByID (id : String) : Observable <Autos>;
  abstract getAutosAll(): Observable <Array<Autos>>;
  abstract SaveAutosNew (_aut : Autos) : Observable<void>;
}
