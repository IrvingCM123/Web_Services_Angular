import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autos } from 'src/app/domain/models/Autos/autos';
import { AutosGateway } from 'src/app/domain/models/Autos/Gateway/Autos-Gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutosApiServicesDocker extends AutosGateway {

  private _url = 'http://localhost:3000/control-al';

  constructor(private http: HttpClient) {super();}
  
  getByID(id: String): Observable<Autos> {
      return this.http.get<Autos>(this._url+id);
  }
  getAll(): Observable<Autos[]> {
      return this.http.get<Array<Autos>>(this._url);
  }
  saveNew(_aut: Autos): Observable<void> {
      throw new Error('Método no implementado.');
  }
}
