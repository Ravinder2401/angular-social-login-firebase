import { Component } from '@angular/core';
//Firebase
import { GoogleAuthProvider,FacebookAuthProvider,TwitterAuthProvider} from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AmazonLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSocialLoginFirebase';

  constructor(public afAuth: AngularFireAuth, private authServiceSSO:SocialAuthService){} // Inject firebase auth service

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }

  //Sign in with Twitter
  TwitterAuth(){
    return this.AuthLogin(new TwitterAuthProvider());
  }

  // Sign in with Amazon
  AmazonAuth(){
    this.authServiceSSO.signIn(AmazonLoginProvider.PROVIDER_ID).then((res)=>{
      // this.runAuthStateSubscribeWorkFlow();
      console.log('response---',res);
      
    })
  }

    // Auth logic to run auth providers
  AuthLogin(provider:any) {
    return this.afAuth
    .signInWithPopup(provider)
    .then((result) => {
    console.log(`You have been successfully logged in with ${provider}`);
    console.log(result.additionalUserInfo?.profile);
    })
    .catch((error) => {
    console.log(error);
    });
    }
  
}
