import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Autos } from 'src/app/domain/models/Autos/autos';
import { Clientes } from 'src/app/domain/models/Autos/clientes';
import { Distribuidores } from 'src/app/domain/models/Autos/distribuidor';
import { Inventario } from 'src/app/domain/models/Autos/inventario';

import { AutosGateway } from 'src/app/domain/models/Autos/Gateway/Autos-Gateway';
import { ClientesGateway } from 'src/app/domain/models/Autos/Gateway/Clientes-Gateway';
import { DistribuidoresGateway } from 'src/app/domain/models/Autos/Gateway/Distribuidor-Gateway';
import { InventarioGateway } from 'src/app/domain/models/Autos/Gateway/Inventario-Gateway';

@Injectable({
  providedIn: 'root'
})

export class AutosApiServicesDocker extends AutosGateway {

  private _url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { super(); }

  getAutosByID(id: String): Observable<Autos> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Autos>((this._url + 'autos/ ' + id), { headers: header });
  }

  getAutosAll(): Observable<Autos[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Array<Autos>>(this._url + 'autos/ ', { headers: header });
  }

  SaveAutosNew(_aut: Autos): Observable<void> {
    throw new Error('Método no implementado.');
  }

}

export class ClientesApiServicesDocker extends ClientesGateway {

  private _url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { super(); }

  getClientesByID(id: String): Observable<Clientes> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Clientes>((this._url + 'cliente/' + id),  { headers: header });
  }
  getClientesAll(): Observable<Clientes[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Array<Clientes>>(this._url + 'cliente/ ', { headers: header });
  }

  saveClientesNew(_cliente: Clientes): Observable<void> {
    throw new Error('Method not implemented.');
  }

}

export class DistribuidoresApiServicesDocker extends DistribuidoresGateway {

  private _url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { super(); }

  getDistribuidorByID(id: String): Observable<Distribuidores> {
    throw new Error('Method not implemented.');
  }
  getDistribuidorAll(): Observable<Distribuidores[]> {
    throw new Error('Method not implemented.');
  }
  saveDistribuidorNew(_distribuidor: Distribuidores): Observable<void> {
    throw new Error('Method not implemented.');
  }

}
