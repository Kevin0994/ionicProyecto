import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { RestProvider } from '../provider/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Cliente:any=[];
  formLogin: FormGroup;


  constructor(public proveedor: RestProvider,
    public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl:NavController) {
    this.formLogin = this.fb.group({
      'correo': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar(){
    var form = this.formLogin.value;
    if(this.formLogin.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
    
    if(this.Cliente.length != 0){
      if(this.Cliente[0].correo == form.correo && this.Cliente[0].password == form.password){
        localStorage.setItem('ingresado','true');
        localStorage.setItem('Usuario',this.Cliente[0].idcliente);
        this.navCtrl.navigateRoot('tabs/home');
      }else{
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos no son correctos',
          buttons: ['OK']
        });
  
        await alert.present();
        return;
      }
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos no son correctos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
  }

  BuscarUsuario() {
    var form = this.formLogin.value;
    this.proveedor.BuscarCliente(form.correo).then(data => {
      this.Cliente=data;
      this.ingresar();
    }).catch(data => {
      console.log(data);
    });
  }
}
