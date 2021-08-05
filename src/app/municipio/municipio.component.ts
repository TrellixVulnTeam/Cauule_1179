import {AfterViewInit, Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {InfoComponent} from './info/info.component';
import {TurismoComponent} from './turismo/turismo.component';
import {ViviendaComponent} from './vivienda/vivienda.component';
import {EmpleoComponent} from './empleo/empleo.component';
import {ItemService} from '../service/item.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-municipio',
  templateUrl: 'municipio.component.html',
  styleUrls: ['municipio.component.css']
})
export class MunicipioComponent implements OnInit{

  municipio: any;
  municipio_id: string;
  municipio_name: string;
  municipios_subcritos: any;
  is_subs:any //variable auxiliar para determinar si se usa el icono de suscrito o no.



  constructor(private router: Router, private cvRef: ViewContainerRef, private afs:AngularFirestore, private resolver: ComponentFactoryResolver, private route: ActivatedRoute, private itemService:ItemService) {}

  ngOnInit(): void {
    this.is_subs = 'bell.png';
    this.route.queryParams.subscribe(params => {
          this.municipio_id = params.id;
          this.municipio_name = params.name;
          //Se obtienen todos los datos del municipio.
          var subs = this.itemService.getMunicipio(params.id).subscribe(items => {
            this.municipio = items;
            var component = this.cvRef.createComponent(this.resolver.resolveComponentFactory(InfoComponent));
            component.instance.municipio = this.municipio;
            subs.unsubscribe();
          });
          //Si hay un usuario logueado, se averigua si está suscrito a este municipio. En caso de estarlo, se cambia el icono a pantalla verde, si no se deja blanca.
          if(localStorage.getItem('user') !== null){
            this.itemService.getMunicipiosSubs(localStorage.getItem('user')).subscribe(items => {
              this.municipios_subcritos = items;
              if(this.municipios_subcritos[0]['municipios_subs'].includes(this.municipio_id)){
                this.is_subs = 'bell_subs.png'
              }else{
                this.is_subs = 'bell.png'
              }
            });
          }

        }
      );

  }

  //Acción de suscribirse/desuscribirse al municipio.
  bellAction(){
    if(localStorage.getItem('user') !== null){
      if(this.municipios_subcritos[0]['municipios_subs'].includes(this.municipio_id)){

        console.log('Se procede a desuscribir');
        console.log('Before',this.municipios_subcritos[0]['municipios_subs'])
        const index: number =this.municipios_subcritos[0]['municipios_subs'].indexOf(this.municipio_id);
        if (index !== -1) {
          this.municipios_subcritos[0]['municipios_subs'].splice(index, 1);
        }
        console.log('After',this.municipios_subcritos[0]['municipios_subs'])
        this.afs.collection('users').doc(localStorage.getItem('user')).set({
          mail: localStorage.getItem('user'),
          municipios_subs : this.municipios_subcritos[0]['municipios_subs']}
        );
        this.is_subs = 'bell.png';


      }else{
        console.log('Se procede a suscribir');
        this.municipios_subcritos[0]['municipios_subs'].push(this.municipio_id);
        this.afs.collection('users').doc(localStorage.getItem('user')).set({
          mail: localStorage.getItem('user'),
          municipios_subs : this.municipios_subcritos[0]['municipios_subs']}
        );
        this.is_subs = 'bell.png';
        this.is_subs = 'bell_subs.png'
      }
    }else{
      //En caso de que se pulse la campana sin estar logueado.
      this.router.navigate(['/login'])
    }
  }

  //Permite cambiar al subcomponente Turismo.
  NavegarTurismo(){
    this.cvRef.clear();
    var component = this.cvRef.createComponent(this.resolver.resolveComponentFactory(TurismoComponent));
    component.instance.municipio_id = this.municipio['id'];
  }
  //Permite cambiar al subcomponente Vivienda.
  NavegarVivienda(){
    this.cvRef.clear();
    var component = this.cvRef.createComponent(this.resolver.resolveComponentFactory(ViviendaComponent));
    component.instance.municipio_id = this.municipio_id;
  }
  //Permite cambiar al subcomponente Empleo.
  NavegarEmpleo(){
    this.cvRef.clear();
    var component = this.cvRef.createComponent(this.resolver.resolveComponentFactory(EmpleoComponent));
    component.instance.municipio_id = this.municipio['id'];
  }
  //Permite cambiar al subcomponente Info.
  NavegarInfo(){
    this.cvRef.clear();
    console.log(this.municipio_id);
    var component = this.cvRef.createComponent(this.resolver.resolveComponentFactory(InfoComponent));
    component.instance.municipio = this.municipio;
  }



}
