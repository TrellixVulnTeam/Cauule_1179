import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {MunicipioComponent} from '../municipio/municipio.component';
import {ItemService} from '../service/item.service';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-seleccion-municipio',
  templateUrl: './seleccion-municipio.component.html',
  styleUrls: ['./seleccion-municipio.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SeleccionMunicipioComponent implements OnInit {
  provincias: any;
  provincia: any;
  municipios: any;
  notfoundmessage: string;

  constructor(private router: Router,private renderer: Renderer2, private el: ElementRef, public itemService: ItemService, afa:AngularFireAuth) {
  }


  //Metodo que se le impone a cada carta de municipio para que al hacer click en este se habra el componente Municipio y se le pase la ID y el nombre del municipio.
  selectMunicipio(id, name){
    this.router.navigate(['/municipio'], { queryParams: { id: id, name: name } });
  }

  //Se cargan todos los municipios de esa provincia. En caso de no haber ninguno, se muestra un mensaje de error.
  obtainMunicipios(provincia){
    this.itemService.obtainMunicipios(provincia).subscribe(items => {
      this.municipios = items;
      console.log(this.municipios);
      if(this.municipios.length === 0){
        this.notfoundmessage = 'No se han encontrado municipios registrados para esta provincia';
      }else{
        this.notfoundmessage = '';
      }
    });
  }

  //Se cargarn todos los municipios disponibles.
  ngOnInit(): void {
    this.provincias = ['Ciudad Real','Cordoba','Navarra']
    this.itemService.getMunicipios().subscribe(items => {
      this.municipios = items;
      if(this.municipios.length === 0){
        this.notfoundmessage = 'No se han encontrado municipios registrados para esta provincia';
      }else{
        this.notfoundmessage = '';
      }
    });
  }
}
