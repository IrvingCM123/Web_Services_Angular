import { Component, OnInit } from '@angular/core';
import { GetInventarioCasosUso } from 'src/app/domain/Casos_Uso/Autos/getAlquiler';

@Component({
  selector: 'app-api-autos-inventario',
  templateUrl: './api-autos-inventario.component.html',
  styleUrls: ['./api-autos-inventario.component.scss']
})
export class ApiAutosInventarioComponent implements OnInit {

  public Inventario : Array <any> = [];

  constructor( private _getInventarioCasosUso : GetInventarioCasosUso) { }
  response$ ;
  datos;

  ngOnInit(): void {

    this.response$ = this._getInventarioCasosUso.getInventarioAll();
    this.response$.subscribe( (Resp: any) => { this.Inventario = Resp } )

  }

}
