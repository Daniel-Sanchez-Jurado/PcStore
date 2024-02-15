import { Router } from '@angular/router';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ArticlesService } from '../../pages/services/articles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'miFooter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  
  cartCounter: number;
  cartCounterSubscription: Subscription;

  constructor(
    private router: Router,
    private articlesService: ArticlesService
    ) {
      this.cartCounter = this.articlesService.cartCounter;
      this.cartCounterSubscription = this.articlesService.cartCounterSubject.subscribe((counter: number) => {
        this.cartCounter = counter;
      });
    }
  
  ngOnInit() {
    this.cartCounter = this.articlesService.cartCounter;
    // Te suscribes al observable para recibir actualizaciones del contador
    this.cartCounterSubscription = this.articlesService.cartCounterSubject.subscribe((counter: number) => {
      this.cartCounter = counter;
    });
  }

  ngOnDestroy() {
    // Te desuscribes del observable para evitar pérdidas de memoria
    if (this.cartCounterSubscription) {
      this.cartCounterSubscription.unsubscribe();
    }
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
