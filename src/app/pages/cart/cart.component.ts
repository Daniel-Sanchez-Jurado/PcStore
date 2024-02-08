import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm } from '../../models/registerForm';
import { Title } from '@angular/platform-browser';

interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
}

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productos: Producto[] = [];

  eliminarProducto(producto: Producto) {
    const index = this.productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }

  eliminarTodosLosProductos() {
    this.productos = [];
  }

  realizarPedido() {
    // Aquí puedes implementar la lógica para realizar el pedido, como enviar los productos al servidor, etc.
  }
  constructor(
    private router: Router,
    private titulo: Title
    ) {
      titulo.setTitle('PcStore');
    }

    ngOnInit() {}
  
  public onClickProduct(): void {
    this.router.navigate(['/detail']);
  }

  public onClickCart(): void {
    this.router.navigate(['/cart']);
  }

  public onClickLogo(): void {
    this.router.navigate(['/home']);
  }

  public onClickCategories(): void {
    this.router.navigate(['/categories']);
  }

  public onClickServices(): void {
    this.router.navigate(['/services']);
  }
}
