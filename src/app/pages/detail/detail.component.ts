import { Router } from '@angular/router';
import { RegisterForm } from '../../models/registerForm';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from 'src/app/models/article';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [],
})
export class DetailComponent implements OnInit {

  public article: Article;
  cartCounter: number;
  bodyHeight: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titulo: Title,
    private articlesService: ArticlesService,
    private elementRef: ElementRef
    ) {
      titulo.setTitle('PcStore - Detalle producto');
      this.article = history.state.article;
      this.cartCounter = this.articlesService.cartCounter;
      this.bodyHeight = 0;
    }

  ngOnInit() {
    console.log(this.article.name);
  } 

  ngAfterViewInit() {
    // Acceder al elemento <body> del DOM
    const bodyElement = document.body;

    // Verificar si el elemento <body> está definido
    if (bodyElement) {
      // Obtener el tamaño vertical en píxeles del elemento <body>
      this.bodyHeight = bodyElement.offsetHeight;
      console.log('Tamaño vertical del body en Detail:', this.bodyHeight, 'píxeles');

      // Verificar el tamaño del cuerpo y hacer ajustes si es necesario
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

  public onClickAdd(article: Article): void {
    this.articlesService.addArticleToCart(article);
    this.articlesService.updateCartCounter(this.articlesService.cart.length);
    this.cartCounter = this.articlesService.cartCounter
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