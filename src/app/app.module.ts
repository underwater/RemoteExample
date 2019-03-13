import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyBC6kjcmSZnop4w024T4iehLG8ixfIaFFw',
  authDomain: 'todoapp-e0664.firebaseapp.com',
  databaseURL: 'https://todoapp-e0664.firebaseio.com',
  projectId: 'todoapp-e0664',
  storageBucket: 'todoapp-e0664.appspot.com',
  messagingSenderId: '344324438336'
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
