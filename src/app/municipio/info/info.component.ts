import {Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../../service/item.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InfoComponent implements OnInit {
  municipio: any;
  servicios: any;
  errormessage:any;
  servicios_to_show: any; //variable auxiliar usada para decidir si hay servicios como para renderizar la parte de servicios o no.
  constructor(private router: Router,private renderer: Renderer2, private el: ElementRef, private itemService:ItemService) {}



  //Establece el color del texto de si este municipio tiene o no cierre perimetral.
  public getCovidColor(estado:any){
    if (estado == 'Abierto'){
      return {'color': 'green'};
    }else{
      return {'color': 'red'};
    }
  }

  ngOnInit(): void {
    //Obtiene todos los servicios registrados del municipio. Si no se encuentra ninguno entonces muestra un mensaje.
    this.servicios_to_show = true
    this.itemService.getServicios(this.municipio['id']).subscribe(items => {
      this.servicios = items;
      if(Object.keys(this.servicios[Object.keys(this.servicios)[0]]).length < 1){
        this.servicios_to_show = false
        this.errormessage = 'No se han encontrado servicios relacionados con este municipio.'
      }
    });
  }

}
