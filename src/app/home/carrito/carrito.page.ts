import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  public Items:any[];
  constructor() { }

  ngOnInit() {
    var array = localStorage.getItem('MiCarrito');
    this.Items=JSON.parse(array);
    console.log(this.Items);
  }

}
