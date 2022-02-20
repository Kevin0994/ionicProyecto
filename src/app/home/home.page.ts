import { Component } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { RestProvider } from '../provider/rest.service';
import { DetallesProductoPage } from './detalles-producto/detalles-producto.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Items:any;
  
  constructor(public proveedor: RestProvider,
    public alertController: AlertController,
    public navCtrl:NavController,
    public modalController:ModalController) {
      this.loadInfo();
  }

  
  ionViewWillEnter(){
    this.loadInfo();
  }

  loadInfo(){
    this.proveedor.loadProductos().then(data => {
      this.Items=data;
      console.log('Impremiendo Items')
      console.log(this.Items);
    }).catch(data => {
      console.log(data);
    })
  }

  async openModal(producto:any){
    const modal = await this.modalController.create({
      component: DetallesProductoPage,
      cssClass: 'my-class-modal',
      componentProps:{
        'Producto':producto,
      }
    });
    return await modal.present();
  }

}
