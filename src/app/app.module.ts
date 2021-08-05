import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MunicipioComponent } from './municipio/municipio.component';
import { EmpleoComponent } from './municipio/empleo/empleo.component';
import { InfoComponent } from './municipio/info/info.component';
import { ViviendaComponent } from './municipio/vivienda/vivienda.component';
//import { TurismoComponent } from './turismo/turismo.component';
import { SeleccionMunicipioComponent } from './seleccion-municipio/seleccion-municipio.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {ItemService} from './service/item.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MunicipioComponent,
    routingComponents,
    EmpleoComponent,
    InfoComponent,
    ViviendaComponent,
    //TurismoComponent,
    SeleccionMunicipioComponent,
    LoginPageComponent,
    SignupPageComponent,
    WelcomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
