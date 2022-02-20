import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RestProvider } from '../provider/rest.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public proveedor: RestProvider,
    public alertController: AlertController,
    public navCtrl:NavController) {
      
  }

  ngOnInit() {
  }

  redireccionar(url:string){
    this.navCtrl.navigateRoot('tabs/'+url);
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
            localStorage.clear();
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }
}
