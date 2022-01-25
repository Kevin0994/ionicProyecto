import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { Cliente } from '../models/cliente.interface';
import { RestProvider } from '../provider/rest.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegistro: FormGroup;
  private cliente:Cliente

  constructor(public proveedor: RestProvider,
    public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl:NavController) {
    this.formRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'apellido': new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.required),
      'telefono': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirPassword': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
    
  }

  async Registrar(){
    var formulario = this.formRegistro.value;
    if(this.formRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
    
    this.cliente = {
      nombres: formulario.nombre,
      apellidos: formulario.apellido,
      correo: formulario.correo,
      telefono:formulario.telefono,
      password: formulario.password,
    }

    this.proveedor.InsertarCliente(this.cliente).then(data => {
      console.log(data);
      if(this.proveedor.status){
        this.navCtrl.navigateRoot('login');
      }else{
        var result=this.proveedor.error;
        if(result == 400){
          this.ErrorMensajeCorreo();
          return;
        }else{
          this.ErrorMensajeServidor();
          return;
        }
      }
    }).catch(data => {
      console.log(data);
    });
  }

  async ErrorMensajeServidor(){
    const alert = await this.alertController.create({
      header: 'Error del servidor',
      message: 'error al conectarse con el servidor',
      buttons: ['OK']
    });

    await alert.present();
  }

  async ErrorMensajeCorreo(){
    const alert = await this.alertController.create({
      header: 'Error del servidor',
      message: 'ya existe un correo con este nombre',
      buttons: ['OK']
    });

    await alert.present();
  }

}
