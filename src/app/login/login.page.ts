import { Component, OnInit } from '@angular/core';
import {FbloginService} from '../services/fblogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public facebook_account;
  constructor(public fb:FbloginService) { }

  ngOnInit() {
  }
  loguearFB(){
    this.facebook_account = this.fb.loginFB();
  }

}
