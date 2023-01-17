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

  private _url = 'http://localhost:3000/autos/';

  constructor(private http: HttpClient) { super(); }

  getAutosByID(id: String): Observable<Autos> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Autos>((this._url + id), { headers: header });
  }

  getAutosAll(): Observable<Autos[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Array<Autos>>(this._url, { headers: header });
  }

  SaveAutosNew(_aut: Autos): Observable<void> {
    throw new Error('Método no implementado.');
  }
}


@Injectable({
  providedIn: 'root'
})
export class ClientesApiServicesDocker extends ClientesGateway {

  private _url = 'http://localhost:3000/cliente/';

  constructor(private http: HttpClient) { super(); }

  getClientesByID(id: String): Observable<Clientes> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Clientes>((this._url + id), { headers: header });
  }
  getClientesAll(): Observable<Clientes[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Array<Clientes>>(this._url, { headers: header });
  }

  saveClientesNew(_cliente: Clientes): Observable<void> {
    throw new Error('Method not implemented.');
  }

}


@Injectable({
  providedIn: 'root'
})
export class DistribuidoresApiServicesDocker extends DistribuidoresGateway {

  private _url = 'http://localhost:3000/distribuidor/';

  constructor(private http: HttpClient) { super(); }

  getDistribuidorByID(id: String): Observable<Distribuidores> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Distribuidores>((this._url + id), { headers: header });
  }

  getDistribuidorAll(): Observable<Distribuidores[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Array<Distribuidores>>(this._url, { headers: header });
  }

  saveDistribuidorNew(_distribuidor: Distribuidores): Observable<void> {
    throw new Error('Method not implemented.');
  }

}


@Injectable({
  providedIn: 'root'
})
export class InventarioApiServicesDocker extends InventarioGateway {

  private _url = 'http://localhost:3000/control-al/';

  constructor(private http: HttpClient) { super(); }

  getInventarioByID(id: String): Observable<Inventario> {
    return this.http.get<Inventario>((this._url + id));
  }

  getInventarioAll(): Observable<Inventario[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Array<Inventario>>(this._url);
  }

  saveInventarioNew(_inventario: Inventario): Observable<void> {
    throw new Error('Method not implemented.');
  }

}
