import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { RestProvider } from 'src/app/provider/rest.service';
import { DetallesProductoPage } from '../detalles-producto/detalles-producto.page';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.page.html',
  styleUrls: ['./shorts.page.scss'],
})
export class ShortsPage implements OnInit {

  Items:any;
  
  constructor(public proveedor: RestProvider,
    public alertController: AlertController,
    public navCtrl:NavController,
    public modalController:ModalController) {
      
  }

  ngOnInit() {
    this.loadInfo();
  }

  
  ionViewWillEnter(){
    this.loadInfo();
  }

  loadInfo(){
    var categoria = "Shorts"
    var tipo = this.proveedor.tipo;
    if(tipo == ""){
      this.proveedor.BuscarProductos(categoria).then(data => {
        this.Items=data;
        console.log('Impremiendo Items')
        console.log(this.Items);
      }).catch(data => {
        console.log(data);
      })
    }else{
      this.proveedor.BuscarCustomerProductos(categoria,tipo).then(data => {
        this.Items=data;
        console.log('Impremiendo Items')
        console.log(this.Items);
      }).catch(data => {
        console.log(data);
      })
    }
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
