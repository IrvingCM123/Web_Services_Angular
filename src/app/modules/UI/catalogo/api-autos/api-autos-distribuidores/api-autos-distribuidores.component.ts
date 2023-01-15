import { Component, OnInit } from '@angular/core';
import { GetDistribuidoresCasosUso } from 'src/app/domain/Casos_Uso/Autos/getDistribuidor';

@Component({
  selector: 'app-api-autos-distribuidores',
  templateUrl: './api-autos-distribuidores.component.html',
  styleUrls: ['./api-autos-distribuidores.component.scss']
})
export class ApiAutosDistribuidoresComponent implements OnInit {

  public Distribuidores: Array<any> = [];

  constructor( private _getDistribuidoresCasosUso : GetDistribuidoresCasosUso) { }
  response$ ;
  datos;

  ngOnInit(): void {

    this.response$ = this._getDistribuidoresCasosUso.getDistribuidorAll();
    this.response$.subscribe( (Resp: any) => { this.Distribuidores = Resp } )

  }

}
