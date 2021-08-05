import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../../service/item.service';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.css']
})
export class TurismoComponent implements OnInit {



  constructor(private router: Router,private renderer: Renderer2, private el: ElementRef,private itemService:ItemService) {}

  municipio_id: string;
  municipio_name: string;
  turismos_to_show: boolean;
  errormessage: string;
  turismos: any;

  ngOnInit(): void {
    //Obtiene todos los turismos del municipio y los muestra. Si no hay ninguno registrado entonces se muestra un mensaje.
    this.turismos_to_show = true;
    this.itemService.getTurismos(this.municipio_id).subscribe(items => {
      this.turismos = items;
      console.log("Number of turismos keys:",Object.keys(this.turismos).length)
      if(Object.keys(this.turismos[Object.keys(this.turismos)[0]]).length < 1){
        this.turismos_to_show = false;
        this.errormessage = 'No se han encontrado sitios de turismo registrados en este momento.'
      }
    });

  }

}
