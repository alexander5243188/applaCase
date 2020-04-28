import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Injectable({
  providedIn: 'root'
})
export class FbloginService {

  constructor(
    private fb: Facebook
  ) { }
  loginFB(){
    this.fb.login(['id','name','email']).then
      ((res:FacebookLoginResponse)=>{
        return('Logueado correctamente'+JSON.stringify(res));
      }).
      catch((error)=>{
        return('Error:'+JSON.stringify(error));
      });
    }
}
