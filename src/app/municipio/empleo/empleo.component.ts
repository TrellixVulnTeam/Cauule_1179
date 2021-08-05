import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../../service/item.service';



@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.component.html',
  styleUrls: ['./empleo.component.css']
})
export class EmpleoComponent implements OnInit {

  municipio_id: string;
  municipio_name: string;
  empleos: any
  errormessage: any;
  empleos_to_show: any;

  constructor(private router: Router,private renderer: Renderer2, private el: ElementRef, private itemService:ItemService) {
  }

  ngOnInit(): void {
    //Se obtienen todos los empleos registrados en ese municipio.
    this.empleos_to_show= true;
    this.itemService.getEmepleos(this.municipio_id).subscribe(items => {
      this.empleos = items;
      console.log(typeof this.empleos, this.empleos);
      //En el caso de que no haya ninguno, Firebase devuelve un objeto diccionario vacío, y para comprobar realmente si no hay
      //empleos es viendo si ese diccionario no tiene claves.
      if(Object.keys(this.empleos[Object.keys(this.empleos)[0]]).length < 1){
        this.empleos_to_show = false;
        this.errormessage = 'No se han encontrado empleos registrados en este momento.'
      }
    });
  }



  //Metodo para obtener todos los empleos del municipio.
 searchEmpleo(){
    this.itemService.getEmepleos(this.municipio_id).subscribe(items => {
      this.empleos = items;
      console.log(typeof this.empleos, this.empleos);
    });
  }

}
