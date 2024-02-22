import { Router } from '@angular/router';
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
  cartCounter: number;
  bodyHeight: number;

  public search: String;

  constructor(
    private router: Router,
    private titulo: Title,
    private articlesService: ArticlesService,
    private elementRef: ElementRef
    ) {
      titulo.setTitle('PcStore - Search');
      this.articles = [];
      this.cartCounter = this.articlesService.cartCounter;      
      this.bodyHeight = 0;
      this.search = history.state.section;
    }
  
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  public onClickProduct(article: Article): void {
    this.router.navigate(['/detail'], { state: { article: article } });
  }

  public onClickAdd(article: Article): void {
    this.articlesService.addArticleToCart(article);
    this.articlesService.updateCartCounter(this.articlesService.cart.length);
    this.cartCounter = this.articlesService.cartCounter
  }
}
