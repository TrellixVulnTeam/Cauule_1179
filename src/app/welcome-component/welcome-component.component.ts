import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.css']
})
export class WelcomeComponentComponent implements OnInit {

  username: any;
  logicon: any;//variable auxiliar para especificar qué icono se usa para el botón de login.
  constructor(private router :Router) { }

  ngOnInit(): void {
    this.logicon = 'usericon.png';
    if(localStorage.getItem('user') !== null){
      //Si hay un usuario logueado cambia al icono de engranaje.
      this.logicon = 'gear.png'
      this.username = localStorage.getItem('user');
    }
  }

  //Cuando se ejecuta el botón de login: Si ya hay un usuario logueado, abre/cierra el menú desplegable.
  //Si no hay usuario logueado, redirige a la pantalla de login.
  onLogin(){
    if (localStorage.getItem('user') === null){
      this.router.navigate(['/login'])
    }else{
      if(document.getElementById('dropdown_menu').style.getPropertyValue('display') === 'flex'){
        document.getElementById('dropdown_menu').style.setProperty('display','none')
        }else{
          document.getElementById('dropdown_menu').style.setProperty('display','flex')
        }
    }

  }
  //Permite la desconexión del usuario actual.
  onLogOut(){
    localStorage.removeItem('user')
    document.getElementById('dropdown_menu').style.setProperty('display','none')
    window.alert("Adiós "+this.username)
    this.logicon = 'usericon.png'
  }

}
