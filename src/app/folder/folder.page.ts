import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {FirebaseService,estructura} from '../services/firebase.service';
//import { url } from 'inspector';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public listaPastas:any;
  public listaAmaranto:any;
  public listaQuinua:any;
  public productos: estructura[];
 
  public tipo:string;
  //public retorno:string; 

  public nombre:string;
  public precio:string;

  public contactos: estructura[];
 

  
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private ruta:ActivatedRoute,
    private firebase:FirebaseService,
    public alertCtrl: AlertController
   
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.tipo = this.activatedRoute.snapshot.paramMap.get('tipo');
    //this.retorno = "/folder/categorias";

    this.firebase.verProductos().subscribe(res=>{ console.log('productos',res);      this.productos=res;    });
    this.listaPastas=[
      {
        id:0,
        nombre:"Fideo Plano",
        imagen:"http://industriasantamariaspiga.com/img/products/big_c76d8825e16458d9855ed801fd4c9ebf38e6eb6a.jpg",
        precio:3
      },
      {
        id:1,
        nombre:"Fideo del pais",
        imagen:"http://industriasantamariaspiga.com/img/products/big_5cd66dc6470848fda27b8fef1b5fb19c9d4806ec.jpg",
        precio:2
      },
      {
        id:2,
        nombre:"Cabello de angel",
        imagen:"http://industriasantamariaspiga.com/img/products/big_1ccb5358278e823d7ed7128b38307db4e54ff63d.jpg",
        precio:5
      },
      {
        id:3,
        nombre:"Fideo Trebol Mediano",
        imagen:"http://industriasantamariaspiga.com/img/products/big_8ca2a199a8bd4f3dac5415ba744afcccc5484c8c.jpg",
        precio:5
      },
      {
        id:4,
        nombre:"Nido Plano",
        imagen:"http://industriasantamariaspiga.com/img/products/big_ca1fb1b54030014ca851b43246e897a46b2ab824.jpg",
        precio:7
      },
      {
        id:5,
        nombre:"Nido Trebol",
        imagen:"http://industriasantamariaspiga.com/img/products/big_9656c17132fbc6ec071158ffdbf24607a3d89008.jpg",
        precio:8
      },
      {
        id:6,
        nombre:"Tallarin Ancho",
        imagen:"http://industriasantamariaspiga.com/img/products/big_2bc6ec92e095d3444a6c9b28c2a9b440e748f6f8.jpg",
        precio:9
      }
    ];// fin de lista pastas
    this.listaAmaranto=[
      {
        id:0,
        nombre:"Amaranto",
        imagen:"http://industriasantamariaspiga.com/img/products/big_39fe6de07d400fa100290641afa6cae494ad35d4.jpg",
        precio:10
      }
    ];// fin de lista amaranto
    this.listaQuinua=[
      {
        id:0,
        nombre:"Quinua Roja",
        imagen:"http://industriasantamariaspiga.com/img/products/big_44ddb31c17b0d58af86acefbee444b0171274445.jpg",
        precio:16
      },
      {
        id:1,
        nombre:"Quinua Blanca",
        imagen:"http://industriasantamariaspiga.com/img/products/big_b724e0b204076d2a17d955b28c8454c1ba470f37.jpg",
        precio:13
      },
      {
        id:2,
        nombre:"Quinua Negra",
        imagen:"http://industriasantamariaspiga.com/img/products/big_664db29f84619f94f30e673efa000200fa6f7571.jpg",
        precio:14
      }
    ];// fin de lista quinua
    
    this.firebase.verProductos().subscribe(res=>{
      console.log('productos',res);
      this.productos=res; 
    });

  }// --------------------- fin de ngOninit
  agregar_producto(nombre_, precio_){
    console.log(nombre_,precio_) ;
    this.firebase.agregarProducto(nombre_, precio_);
    console.log("producto Agregado");
  }
  eliminar(id){
    this.firebase.eliminarProducto(id).then(res=>{
      console.log("Eliminado");
    });
  }

  async mensaje(nombre){
    const alert= await this.alertCtrl.create({
      header: "comprado",
      message: nombre,
      buttons: [
        {
          text: 'OK',
          handler: () => {            console.log('conpra realizada');          }
        }
        ]
    })
    alert.present();
  };

}
