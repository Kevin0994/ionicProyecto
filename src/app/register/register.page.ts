import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegistro: FormGroup;

  constructor(public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl:NavController) {
    this.formRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirPassword': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar(){
    var form = this.formRegistro.value;
    if(this.formRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'tienes que llenar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    var usuario= {
      nombre: form.nombre,
      password: form.password
    }


    localStorage.setItem('usuario',JSON.stringify(usuario));
    this.navCtrl.navigateRoot('login');
  }

}
