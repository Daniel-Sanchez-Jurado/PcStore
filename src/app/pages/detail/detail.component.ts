import { Router } from '@angular/router';
import { RegisterForm } from '../../models/registerForm';
import { Component, OnInit, OnDestroy } from '@angular/core';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titulo: Title,
    private articlesService: ArticlesService
    ) {
      titulo.setTitle('PcStore - Detalle producto');
      this.article = history.state.article;
      this.cartCounter = this.articlesService.cartCounter;
    }

  ngOnInit() {
    console.log(this.article.name);
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