import { GetAutosCasosUso } from 'src/app/domain/Casos_Uso/Autos/getAutos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-autos-alquiler',
  templateUrl: './api-autos-alquiler.component.html',
  styleUrls: ['./api-autos-alquiler.component.scss']
})
export class ApiAutosAlquilerComponent implements OnInit {

  public Alquileres: Array<any> = [];

  constructor( private _getAutosCasosUso : GetAutosCasosUso) { }
  response$ ;
  datos;

  ngOnInit(): void {
    //this.response$ = this._getAutosCasosUso.getAutosByID('63b4cd06380a2d579b064b96');
    //this.response$.subscribe (
      //(data) => {
        //this.datos = data;
      //}
    //);

    this.response$ = this._getAutosCasosUso.getAllAutos();
    this.response$.subscribe( (Resp: any) => { this.Alquileres = Resp } )

    //this.response$ = this._getAutosCasosUso.getAutosByID('63b4cd06380a2d123rb064b96');
    //this.response$.subscribe( (Resp: any) => { this.Alquileres = Resp, console.log(Resp) } )
  }

}
