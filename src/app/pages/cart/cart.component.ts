import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm } from '../../models/registerForm';
import { Title } from '@angular/platform-browser';
import { Article } from 'src/app/models/article';
import { ArticlesService } from '../services/articles.service';

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

  cart: Article[];
  totalPrice: number;
  articlePrice: number;
  cartCounter: number;

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
    private titulo: Title,
    private articlesService: ArticlesService
    ) {
      titulo.setTitle('PcStore - Carrito');
      this.cart = this.articlesService.cart;
      this.totalPrice = 0;
      this.articlePrice = 0;
      this.cartCounter = this.articlesService.cartCounter;
    }

  ngOnInit() {
    for (let i = 0; i < this.cart.length; i++) {
      this.articlePrice = this.cart[i].price;
      this.totalPrice = parseFloat((this.totalPrice + this.articlePrice).toFixed(2));
    }

  }
  
  public onClickProduct(article: Article): void {
    this.router.navigate(['/detail'], { state: { article: article } });
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

  public onClickDeleteArticle(index: number, price: number): void {
    this.articlesService.cart.splice(index, 1);
    this.cart = this.articlesService.cart;
    this.totalPrice = parseFloat((this.totalPrice - price).toFixed(2));
    this.cartCounter = this.cartCounter - 1;    
    this.articlesService.updateCartCounter(this.cartCounter);
  }

  public onClickEmptyCart(): void {
    this.cart = [];
    this.articlesService.cart = [];
    this.totalPrice = 0;
    this.cartCounter = 0;
    this.articlesService.updateCartCounter(this.cartCounter);
  }

  public onClickFinalisePurchase(): void {
    this.router.navigate(['/login']);
    // Hacer lo que se quiera al finalizar compra
  }
}
