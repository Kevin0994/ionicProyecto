import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, NavController } from '@ionic/angular';
import { RestProvider } from 'src/app/provider/rest.service';
import { UsuarioPut } from 'src/app/models/usuarioPut.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  formRegistro: FormGroup;
  public formulario:any;
  public Usuario:any="init";
  public usuarioPut:UsuarioPut;
  inputDisabled: boolean;

  constructor(public proveedor: RestProvider,
    public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl:NavController,
    public sanitizer: DomSanitizer,) { 
      this.formRegistro = this.crateForm();
    }
    ngOnInit() {
      this.formRegistro = this.crateForm();
      this.loadInfo();
      this.inputDisabled = true;
    }
  
    loadInfo(){
      this.proveedor.BuscarCliente(localStorage.getItem('Usuario')).then(data => {
        this.Usuario=data;
        console.log(this.Usuario);
        this.formRegistro = this.crateForm();
      }).catch(data => {
        console.log(data);
      })
    }

    async saveProfile(){
      this.formulario = this.formRegistro.value;
      if(this.formRegistro.invalid){
        const alert = await this.alertController.create({
          header: 'Datos incompletos',
          message: 'Tienes que llenar todos los datos',
          buttons: ['OK']
        });
  
        await alert.present();
        return;
      }

      this.usuarioPut = {
        idcliente: parseInt(localStorage.getItem('Usuario')),
        nombres: this.formulario.nombres,
        apellidos: this.formulario.apellidos,
        correo: this.formulario.correo,
        telefono: this.formulario.telefono,
        password: this.Usuario[0].password,
      }
    
      
      this.proveedor.ActualizarCliente(this.usuarioPut).then(data => {
        console.log(data);
        
        if(this.proveedor.status){
          this.navCtrl.navigateRoot('/tabs/home');
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

    EliminarCuenta(){
      this.proveedor.EliminarCuenta(this.Usuario[0].idcliente).subscribe(data => {
        console.log(data);
        localStorage.clear();
        this.navCtrl.navigateRoot('/login');
        if(this.proveedor.status){
          this.ErrorMensajeServidor();
        }else{
          this.MensajeExito();
        }
      })
    }
  
    crateForm() {
      return this.fb.group({
        correo: [{value: this.Usuario[0].correo, disabled: true}, Validators.required],
        nombres: [{value: this.Usuario[0].nombres, disabled: true}, Validators.required],
        apellidos: [{value: this.Usuario[0].apellidos, disabled: true}, Validators.required],
        telefono: [{value: this.Usuario[0].telefono, disabled: true}, Validators.required],
      });
      
    }
  
    cancelEditProfile() {
      this.inputDisabled = true;
      this.formRegistro.controls.correo.disable();
      this.formRegistro.controls.nombres.disable();
      this.formRegistro.controls.apellidos.disable();
      this.formRegistro.controls.telefono.disable();
      this.formRegistro = this.crateForm();
    }
  
    editProfile() {
      this.inputDisabled = false;
      this.formRegistro.controls.correo.enable();
      this.formRegistro.controls.nombres.enable();
      this.formRegistro.controls.apellidos.enable();
      this.formRegistro.controls.telefono.enable();
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
  
    async MensajeExito(){
      const alert = await this.alertController.create({
        header: 'Accion',
        message: 'Cuenta borrado con exito',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  

}
