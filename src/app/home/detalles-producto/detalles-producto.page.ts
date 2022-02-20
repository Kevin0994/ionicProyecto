import { Component,Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Carrito } from 'src/app/models/carrito.interface';
import { RestProvider } from 'src/app/provider/rest.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.page.html',
  styleUrls: ['./detalles-producto.page.scss'],
})
export class DetallesProductoPage implements OnInit {

  @Input() Producto: any;
  public carrito:Carrito;

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
    this.carrito = {
      idcliente:parseInt(localStorage.getItem('Usuario')),
      idproducto: this.Producto.idProducto,
    }
    this.proveedor.InsertarCarrito(this.carrito).then(data=>{
      console.log(data);
    }).catch(data => {
      console.log(data);
    });
    window.location.reload();
    this.closeModal();
  }

}
