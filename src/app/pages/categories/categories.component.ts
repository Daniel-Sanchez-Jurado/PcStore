import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm } from '../../models/registerForm';
import { Title } from '@angular/platform-browser';
import { ArticlesService } from '../services/articles.service';
import { Article } from 'src/app/models/article';

interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
}

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  productos: Producto[] = [];

  keyboards: Article[];
  mice: Article[];
  monitors: Article[];
  headphones: Article[]; 

  constructor(
    private router: Router,
    private titulo: Title,
    private articlesService: ArticlesService
    ) {
      titulo.setTitle('PcStore - Categorías');
      this.keyboards = this.articlesService.getKeyboards();
      this.mice = this.articlesService.getMice();
      this.monitors = this.articlesService.getMonitors();
      this.headphones = this.articlesService.getHeadphones();
    }

  ngOnInit() {
  }
  
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

  public onClickProduct(article: Article): void {
    this.router.navigate(['/detail'], { state: { article: article } });
  }

  public onClickAdd(article: Article): void {
    this.articlesService.addArticleToCart(article);
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
