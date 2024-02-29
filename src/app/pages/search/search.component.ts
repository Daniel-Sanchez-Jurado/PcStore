import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ArticlesService } from '../services/articles.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  
  articles: Article[];
  searchArticles: Article[];
  cartCounter: number;/////////ARREGLAR EL COTADOR DE PRODUCTOS
  bodyHeight: number;

  public search: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titulo: Title,
    private articlesService: ArticlesService,
    private elementRef: ElementRef
    ) {
      titulo.setTitle('PcStore - Búsqueda');
      this.articles = this.articlesService.articlesFAKE;
      this.searchArticles = [];
      this.cartCounter = this.articlesService.cartCounter;      
      this.bodyHeight = 0;
      this.search = '';
    }
  
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.route.queryParams.subscribe(params => {
      this.search = params['search'];
    });

    this.searchArticles = this.filterArticles(this.search);
    console.log(this.searchArticles);
  }

  ngAfterViewInit() {
    const bodyElement = document.body;

    if (bodyElement) {
      this.bodyHeight = bodyElement.offsetHeight;
      
      if (this.bodyHeight < 919) {
        const miFooter = this.elementRef.nativeElement.querySelector('#miFooter');
        if (miFooter) {
          miFooter.style.position = 'fixed';
          miFooter.style.bottom = '0';
          miFooter.style.left = '0';
          miFooter.style.width = '100%';
        } else {
          console.error('El elemento <miFooter> no está definido');
        }
      }
    } else {
      console.error('El elemento <body> no está definido');
    }
  }

  public filterArticles(keyword: String): Array<Article> {
    const searchTerm = keyword.toLowerCase();
    
    const filteredArticles = this.articles.filter(article => {
        const nameLower = article.name.toLowerCase();
        const categoryLower = article.category.toLowerCase();
        return nameLower.includes(searchTerm) || categoryLower.includes(searchTerm);
    });
    
    return filteredArticles;
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
