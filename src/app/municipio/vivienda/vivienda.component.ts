import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../service/item.service';
import {not} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.css']
})
export class ViviendaComponent implements OnInit {

  municipio_id: any;
  viviendas: any;
  types: any;
  type:any;
  viviendas_to_show: any;
  errormessage: any;

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.viviendas_to_show = true;
    this.types = ['Piso','Casa','Bajo','Parcela']
    this.itemService.getViviendas(this.municipio_id).subscribe(items => {
      this.viviendas = items;
      if(Object.keys(this.viviendas[Object.keys(this.viviendas)[0]]).length < 1){
        this.viviendas_to_show = false;
        this.errormessage = 'No se han encontrado viviendas disponibles registrados en este momento.'
      }
    });
  }

  //
  searchViviendas( id,type, action){
    this.itemService.getSelectedViviendas(id, type, action).subscribe(items => {
      this.viviendas = items;
      console.log("Viviendas",this.viviendas)
      if(this.viviendas.length > 0){
        this.viviendas_to_show = true;
      }
      console.log(this.viviendas)
    });
  }

}
