import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RestProvider } from '../provider/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Items:any;
  
  constructor(public proveedor: RestProvider,
    public alertController: AlertController,
    public navCtrl:NavController) {
  }

  loadInfo(){
    this.proveedor.loadInfo().then(data => {
      this.Items=data;
      console.log('Impremiendo Items')
      console.log(this.Items);
    }).catch(data => {
      console.log(data);
    })
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
