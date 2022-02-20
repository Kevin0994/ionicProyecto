import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RestProvider } from '../provider/rest.service';

@Component({
  selector: 'app-tabsc',
  templateUrl: './tabsc.page.html',
  styleUrls: ['./tabsc.page.scss'],
})
export class TabscPage implements OnInit {

  constructor(public proveedor: RestProvider,
    public alertController: AlertController,
    public navCtrl:NavController) {
      
  }

  ngOnInit() {
  }

  inicio(){
    this.navCtrl.navigateRoot('tabs/home');
  }

  async salir(){
    console.log('Holi');
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Seguro desea salir?',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }
}
