import { Component } from '@angular/core';
//Firebase
import { GoogleAuthProvider} from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSocialLoginFirebase';

  constructor(public afAuth: AngularFireAuth){} // Inject firebase auth service

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

    // Auth logic to run auth providers
  AuthLogin(provider:any) {
    return this.afAuth
    .signInWithPopup(provider)
    .then((result) => {
    console.log('You have been successfully logged in!');
    console.log(result.additionalUserInfo?.profile);
    })
    .catch((error) => {
    console.log(error);
    });
    }
  
}
