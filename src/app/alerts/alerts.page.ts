import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',

})
export class AlertsPage {
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  DoWorkCallBack() {
    this.loadingCtrl
      .create({
        message: 'Loading Callback...'
      })
      .then(scrn => {
        // display screen
        scrn.present();

        // auto turn off in 3 seconds
        setTimeout(() => {
          scrn.dismiss();
        }, 1000);
      });
  }

  async DoWorkAsyncAwait() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading Async / Await...'
    });

    loading.present();

    // auto turn off in 3 seconds
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  async ShowToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your data is saved',
      color: 'dark',
      showCloseButton: true,
      closeButtonText: 'Close',
      position: 'bottom'
    });

    toast.present();
  }

  async ShowAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Configuration Reset!',
      // subHeader: 'Action cannot be undone',
      message:
        'Resetting the configuration will lead to all score results being reset to zero for each game !',

      inputs: [
        { name: 'name', type: 'text', placeholder: 'Your Name' },
        { name: 'email', type: 'email', placeholder: 'name@domain.com' },
        { name: 'newsletter', type: 'checkbox' }
      ],

      buttons: [
        { text: 'Cancel', handler: () => {} },
        {
          text: 'Delete',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });

    alert.present();
  }
}
