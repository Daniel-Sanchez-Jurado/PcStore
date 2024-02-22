import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ArticlesService } from '../services/articles.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  keyboards: Article[];
  mice: Article[];
  monitors: Article[];
  headphones: Article[];
  cartCounter: number;

  public section: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titulo: Title,
    private articlesService: ArticlesService
    ) {
      titulo.setTitle('PcStore - Categorías');
      this.keyboards = this.articlesService.getKeyboards();
      this.mice = this.articlesService.getMice();
      this.monitors = this.articlesService.getMonitors();
      this.headphones = this.articlesService.getHeadphones();
      this.cartCounter = this.articlesService.cartCounter;
      this.section = history.state.section;
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Obtener la sección del estado de la navegación
    this.section = history.state.section;
    // Verificar si hay una sección para desplazarse
    if (this.section) {
      // Buscar el elemento con el ID correspondiente
      const element = document.getElementById(this.section.toString());
      // Verificar si se encontró el elemento
      if (element) {
        // Calcular la posición del elemento
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - 100; // Desplazar 100px arriba
        // Desplazarse al elemento y luego 100px arriba
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  }

  public onClickProduct(article: Article): void {
    this.router.navigate(['/detail'], { state: { article: article } });
  }

  public onClickAdd(article: Article): void {
    this.articlesService.addArticleToCart(article);
    this.articlesService.updateCartCounter(this.articlesService.cart.length);
    this.cartCounter = this.articlesService.cartCounter
  }
}
