import { Component, OnInit } from '@angular/core';
import { ProductoGet } from 'src/app/models/producto.interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  public Items:any;
  constructor() { }

  ngOnInit() {
    
  }

}
