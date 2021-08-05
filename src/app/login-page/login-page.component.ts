import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ItemService} from '../service/item.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {delay} from 'rxjs/operators';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errormessage:string;

  constructor(private router :Router, private itemService:ItemService) { }

  ngOnInit(): void {
  }

  async onSignIn(email, pass){
    //Intenta entrar con los datos especificados. Si lo consigue se redirige a la pantalla principal , si no se informa al usuario:
    try{
      await this.itemService.signin(email, pass)
      window.alert("Bienvenido email "+email)
      await delay(3000);
      this.router.navigateByUrl('/welcomecomp')
    }catch(e){
      this.errormessage = 'El usuario y/o contraseña son incorrectos'
      console.log('Error login')
    }
  }


}
