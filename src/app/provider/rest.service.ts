import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class RestProvider {

  public error:any;
  public status:any=false;

  constructor(public http: HttpClient,) { 
    console.log('Hello traigo los datos del api')
  }

  loadInfo(){
    var api_url="https://warm-sea-68535.herokuapp.com/clientes/";
    return new Promise(resolve => {
      this.http.get(api_url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  BuscarCliente(cliente:any){
    var api_url="https://warm-sea-68535.herokuapp.com/clientes/?search="+cliente;
    return new Promise(resolve => {
      this.http.get(api_url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  InsertarCliente(form:any){
    var api_url="https://warm-sea-68535.herokuapp.com/clientes/"
    return new Promise(resolve => {
      this.http.post(api_url,form).subscribe(data => {
        resolve(data);
        return this.status=true;
      }, err => {
        this.status=false;
        resolve(err);
        if(err.status == 400){
          return this.error=400
        }else{
          return this.error=0
        }
      }).closed;
    });
  }

  loadProductos(){
    var api_url="https://warm-sea-68535.herokuapp.com/vista_productos/";
    return new Promise(resolve => {
      this.http.get(api_url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
