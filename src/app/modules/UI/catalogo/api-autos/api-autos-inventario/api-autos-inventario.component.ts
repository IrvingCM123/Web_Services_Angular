import { Component, OnInit } from '@angular/core';
import { GetAutosCasosUso } from 'src/app/domain/Casos_Uso/Autos/getAutos';

@Component({
  selector: 'app-api-autos-inventario',
  templateUrl: './api-autos-inventario.component.html',
  styleUrls: ['./api-autos-inventario.component.scss']
})

export class ApiAutosInventarioComponent implements OnInit {

  public Inventario : Array <any> = [];
  public Buscar_ID : string = " ";

  constructor( private _getInventarioCasosUso : GetAutosCasosUso) { }
  response$ ;
  datos;

  ngOnInit(): void {
    this.response$ = this._getInventarioCasosUso.getAllAutos();
    this.response$.subscribe( (Resp: any) => { this.Inventario = Resp } )

    this.response$ = this._getInventarioCasosUso.getAutosByID(this.Buscar_ID);
    this.response$.subscribe( (data: any) => { this.datos = data } )
  }


  Buscar() {
    //Recargar página con el id a buscar
    this.ngOnInit();
  }

}
