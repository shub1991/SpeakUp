import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import {SignupPage} from '../signup/signup';
import { AngularFireAuth} from 'angularfire2/auth';
import {TabsPage} from '../tabs/tabs'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(private auth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private toast:ToastController) {
  }

  login(user:User){
    try{
        var result=this.auth.auth.signInWithEmailAndPassword(user.email,user.password)
        console.log(result);
        if(result){
          this.navCtrl.setRoot(TabsPage);
        }
    }
    catch(e){
        console.log(e);
        this.toast.create({message:"Invalid user ID or password",duration:3000}).present();
    }
  }
 
  register(){
    this.navCtrl.push('SignupPage');
  }
}
