import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
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
    public navCtrl:NavController,
    public alertController: AlertController,) { 
      
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

  EliminarCarrito(id:any){
    
    this.Mensaje(id);
    
  }

  async MensajeExito(){
    const alert = await this.alertController.create({
      header: 'Accion',
      message: 'Se ha borrado con exito',
      buttons: ['OK']
    });

    await alert.present();
  }

  async Mensaje(id:any){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Seguro desea borrar ese producto?',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        }, {
          text: 'Si',
          handler: () => {
            this.proveedor.EliminarCarrito(id).subscribe(data=>{
              console.log(data);
              window.location.reload();
            })
          }
        }
      ]
    });

    await alert.present();
  }
}
