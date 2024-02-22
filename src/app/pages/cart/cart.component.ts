import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm } from '../../models/registerForm';
import { Title } from '@angular/platform-browser';
import { Article } from 'src/app/models/article';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart: Article[];
  totalPrice: number;
  articlePrice: number;
  cartCounter: number;

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
    window.scrollTo({ top: 0, behavior: 'smooth' });

    for (let i = 0; i < this.cart.length; i++) {
      this.articlePrice = this.cart[i].price;
      this.totalPrice = parseFloat((this.totalPrice + this.articlePrice).toFixed(2));
    }
  }
  
  public onClickProduct(article: Article): void {
    this.router.navigate(['/detail'], { state: { article: article } });
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
