import { Component, OnInit } from '@angular/core';
import {ItemService} from '../service/item.service';
import {catchError, delay} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['../login-page/login-page.component.css']
})
export class SignupPageComponent implements OnInit {

  errorMessage;

  constructor(public itemService:ItemService, private router:Router) { }

  ngOnInit(): void {}

  //Crompueba que los campos han sido introducidos correctamente, y si no lanza un mensaje de error al usuario.
  //En caso de contrario, comprueba si ya hay usuarios con ese correo y notifica  al usuario del problema.
  //Si el registro es exitoso se notifica y lo redirige a la pantalla principal.
  async onSignUp(email,email2,pass,pass2){
    if (email === email2){
      if(pass == pass2){
        try{
          await this.itemService.signup(email, pass)
          this.itemService.createUser(email)
          window.alert("Bienvenido email "+email)
          await delay(3000);
          this.router.navigateByUrl('/welcomecomp')
        }catch(e){
          this.errorMessage = 'Ese correo ya está en uso'
        }
      }else{
        window.alert("Los campos de contraseña no coinciden")
      }
    }else{
      window.alert("Los campos de correo no coinciden")
    }
  }


}
