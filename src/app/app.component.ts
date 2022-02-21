import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestProvider } from './provider/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  constructor(public proveedor: RestProvider,
    public navCtrl:NavController) {}

  TipoRest(tipo:string){
    this.proveedor.tipo=tipo;
  }

}
