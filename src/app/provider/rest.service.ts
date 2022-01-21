import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) { 
    console.log('Hello traigo los datos del api')
  }

  loadInfo(){
    var api_url="http://127.0.0.1:8000/clientes/";
    return new Promise(resolve => {
      this.http.get(api_url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  BuscarCliente(cliente:any){
    var api_url="http://127.0.0.1:8000/clientes/?search="+cliente;
    return new Promise(resolve => {
      this.http.get(api_url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
