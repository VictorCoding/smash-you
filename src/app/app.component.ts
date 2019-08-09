import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyAR4Qq23oPDMrJS7v0LjzoaUatQ1febm4k',
  authDomain: 'smash-you.firebaseapp.com',
  databaseURL: 'https://smash-you.firebaseio.com',
  projectId: 'smash-you',
  storageBucket: '',
  messagingSenderId: '118589221818',
  appId: '1:118589221818:web:32215c72de00cd6d'
});

const db = firebase.firestore();

db.collection('users').add({
  first: "Vic",
  last: "Nasty",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});

console.log(db);




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
