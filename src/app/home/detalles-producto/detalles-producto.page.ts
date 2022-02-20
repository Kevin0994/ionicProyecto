import { Component,Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RestProvider } from 'src/app/provider/rest.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.page.html',
  styleUrls: ['./detalles-producto.page.scss'],
})
export class DetallesProductoPage implements OnInit {

  @Input() Producto: any;
  Items:any;

  constructor(public proveedor: RestProvider,
    public modalController:ModalController,
    public navCtrl:NavController,) { 
    }

  ngOnInit() {
    console.log(this.Producto);
    this.loadInfo(this.Producto.idTallas);
  }

  closeModal(){
    this.modalController.dismiss();
  }

  loadInfo(id:any){
    this.proveedor.BuscarTallas(id).then(data => {
      this.Items=data;
      console.log('Impremiendo Tallas')
      console.log(this.Items);
    }).catch(data => {
      console.log(data);
    })
  }

  Agregar(){
    // var Array = [this.Producto]
    // localStorage.setItem('MiCarrito', JSON.stringify(Array));
    // console.log(localStorage.getItem('MiCarrito'));
    this.closeModal();
  }

}
