import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductoGet } from 'src/app/models/producto.interface';
import { RestProvider } from 'src/app/provider/rest.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  public Items:any;
  constructor(public proveedor: RestProvider,
    public navCtrl:NavController,) { 
      this.loadInfo();
    }

  ngOnInit() {
    this.loadInfo();
  }

  loadInfo(){
    var usuario=parseInt(localStorage.getItem('Usuario'));
    this.proveedor.BuscarCarrito(usuario).then(data => {
      this.Items=data;
      console.log('Impremiendo carrito')
      console.log(this.Items);
    })
    .catch(data => {
      console.log(data);
    });

  }
}
