import { Component, OnInit } from '@angular/core';
import { GetInventarioCasosUso } from 'src/app/domain/Casos_Uso/Autos/getAlquiler';

@Component({
  selector: 'app-api-autos-alquiler',
  templateUrl: './api-autos-alquiler.component.html',
  styleUrls: ['./api-autos-alquiler.component.scss']
})
export class ApiAutosAlquilerComponent implements OnInit {

  public Alquileres: Array<any> = [];
  public Buscar_ID : string = " ";

  constructor( private _getAlquilerCasosUso : GetInventarioCasosUso) { }
  response$ ;
  datos;

  ngOnInit(): void {

    this.response$ = this._getAlquilerCasosUso.getInventarioAll();
    this.response$.subscribe( (Resp: any) => { this.Alquileres = Resp } )

    this.response$ = this._getAlquilerCasosUso.getInventarioByID(this.Buscar_ID);
    this.response$.subscribe( (data: any) => { this.datos = data } )
  }

  Buscar() {
    //Recargar página con el id a buscar
    this.ngOnInit();
  }

}
