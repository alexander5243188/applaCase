import { Injectable } from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Action} from 'rxjs/internal/scheduler/Action';

export interface estructura{
  id?:string;
  nombre:string;
  precio:string;
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private Collection:AngularFirestoreCollection<estructura>;
  private producto$:Observable<estructura[]>;

  constructor(
    db:AngularFirestore
  ) { 
    this.Collection=db.collection<estructura>('productos');
    this.producto$=this.Collection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map(action =>{
          const data = action.payload.doc.data();
          const id= action.payload.doc.id;
          return{id,...data};
        });
      }
    ));
  }

  agregarProducto(nombre_,precio_){
    this.Collection.add({
      nombre:nombre_,
      precio:precio_
    });
  }
  verProductos(){
    return this.producto$;
  }
  verProducto(id:string){
    return this.Collection.doc<estructura>(id).valueChanges();
  }
  updateProducto(p:estructura, id:string){//p maneja toda estructura para actualizar
    return this.Collection.doc(id).update(p);
  }
  eliminarProducto(id:string){
    return this.Collection.doc(id).delete();
  }
}
