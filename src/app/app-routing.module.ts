import { NgModule } from '@angular/core';
//importamos route
import { RouterModule, Routes } from '@angular/router';
//Importamos los componentes y donde se encuentran
import {LoginPageComponent} from './login-page/login-page.component';
import { TurismoComponent } from './municipio/turismo/turismo.component';
import { ViviendaComponent } from './municipio/vivienda/vivienda.component';
import { EmpleoComponent } from './municipio/empleo/empleo.component';
import {InfoComponent} from './municipio/info/info.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { MunicipioComponent } from './municipio/municipio.component';
import {SignupPageComponent} from './signup-page/signup-page.component';

const routes: Routes = [
//rutas de los componentes
{ path: 'turismo', component: TurismoComponent },
{ path: 'vivienda', component: ViviendaComponent },
{ path: 'empleo', component: EmpleoComponent },
{ path: 'info',component: InfoComponent},
{ path: '',component: WelcomeComponentComponent},
{ path: 'login',component: LoginPageComponent},
  { path: 'signup',component: SignupPageComponent},
{ path: 'municipio',component: MunicipioComponent},
  { path: 'welcomecomp',component: WelcomeComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

export const routingComponents=[TurismoComponent]
