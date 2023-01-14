import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Autos } from 'src/app/domain/models/Autos/autos';
import { AutosGateway } from 'src/app/domain/models/Autos/Gateway/Autos-Gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutosApiServices extends AutosGateway {

  private _url = 'https://my-json-server.typicode.com/IrvingCM123/Consumir_Apis/posts/';

  constructor(private http: HttpClient) { super(); }

  getByID(id: String): Observable<Autos> {

      let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');

      return this.http.get<Autos>( (this._url+id), { headers: header } );
  }

  getAll(): Observable<Autos[]> {
      //return this.http.get<Array<Autos>>(this._url);
      let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');

      return this.http.get<Array<Autos>>(this._url, { headers: header} );

  }

  saveNew(_aut: Autos): Observable<void> {
      throw new Error('Método no implementado.');
  }
}
