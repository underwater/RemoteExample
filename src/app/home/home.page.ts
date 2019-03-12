import { Component } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor  (private loadingCtrl: LoadingController) {  }


  DoWorkAsync() {
    this.loadingCtrl.create({
      message: 'Loading ...'
    }).then(scrn => {

      // display screen
      scrn.present();

    // auto turn off in 3 seconds
      setTimeout(() => {
        scrn.dismiss();
      }, 1000);
    });
  }
}
