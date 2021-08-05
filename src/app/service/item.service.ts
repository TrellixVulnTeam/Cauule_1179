import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable()
export class ItemService {

  constructor(public afs:AngularFirestore, public fireAuth:AngularFireAuth) {}


  //Función usada para identificar si ese usuario y contraseña existen, y en caso afirmativo establecer ese usuario como logueado.
  async signin(email, pass){
   await this.fireAuth.signInWithEmailAndPassword(email,pass).then(res=>{
     localStorage.setItem('user',email)
   })
  }

  //Función usada para registrar ese usuario en caso de que no existiese, y en caso afirmativo establecer ese usuario como logueado.
  async signup(email, pass){
    await this.fireAuth.createUserWithEmailAndPassword(email,pass).then(res=>{
      if(localStorage.getItem('user') === null){
        localStorage.setItem('user',email)
      }
    })
  }


  //Obtiene los municipios con esa provincia en concreto.
  obtainMunicipios(provincia){
    return this.afs.collection('municipios', ref => ref.where('province','==',provincia)).valueChanges();
  }

  //Obtiene todos los municipios.
  getMunicipios(){
    return this.afs.collection('municipios').valueChanges();
  }
  //Obtiene un municipio con esa ID en concreto.
  getMunicipio(id){
    return this.afs.collection('municipios').doc(id).valueChanges();
  }
  //Obtiene todos los servicios con esa ID de municipio.
  getServicios(id){
    return this.afs.collection('municipios').doc(id).collection('servicios').valueChanges();
  }
  //Obtiene todos los turismos con esa ID de municipio.
  getTurismos(id){
    return this.afs.collection('municipios').doc(id).collection('turismos').valueChanges();
  }
  //Obtiene todos los empleos con esa ID de municipio.
  getEmepleos(id){
    return this.afs.collection('municipios').doc(id).collection('empleos').valueChanges();
  }
  //Obtiene todas las viviendas con esa ID de municipio.
  getViviendas(id){
    return this.afs.collection('municipios').doc(id).collection('viviendas').valueChanges();
  }
  //Obtener viviendas con ese ID de municipio y del tipo y acción especificados:
  getSelectedViviendas(id, type, action){
    return this.afs.collection('municipios').doc(id).collection('viviendas',
      ref => ref
        .where('type','==',type)
        .where('action','==',action)
    ).valueChanges();
  }
  //Retorna el documento de user con el mail especificado.
  getMunicipiosSubs(username){
    return this.afs.collection('users', ref => ref.where('mail','==',username)).valueChanges();
  }

  //Crea un documento de usuario en la colección users
  createUser(mail){
    this.afs.collection('users').doc(mail).set({
      mail:mail,
      municipios_subs:[]
    });
  }

}
