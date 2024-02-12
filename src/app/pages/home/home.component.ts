import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ArticlesService } from '../services/articles.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  articles: Article[];

  constructor(
    private router: Router,
    private titulo: Title,
    private articleService: ArticlesService
    ) {
      titulo.setTitle('PcStore - Home');
      this.articles = this.articleService.getArticles();
    }
  
  ngOnInit() {
  }

  public onClickProduct(article: Article): void {
    this.router.navigate(['/detail'], { state: { article: article } });
  }

  public onClickAdd(article: Article): void {
    this.articleService.addArticleToCart(article);
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
