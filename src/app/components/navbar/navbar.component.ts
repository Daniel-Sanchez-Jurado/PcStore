import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ArticlesService } from '../../pages/services/articles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  
  cartCounter: number;
  cartCounterSubscription: Subscription;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private articlesService: ArticlesService
    ) {
      this.cartCounter = this.articlesService.cartCounter;
      this.cartCounterSubscription = this.articlesService.cartCounterSubject.subscribe((counter: number) => {
        this.cartCounter = counter;
      });
    }
  
  ngOnInit() {
    this.cartCounter = this.articlesService.cartCounter;
    this.cartCounterSubscription = this.articlesService.cartCounterSubject.subscribe((counter: number) => {
      this.cartCounter = counter;
    });
  }

  ngOnDestroy() {
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
  
  public onClickCategories(section: string): void {
    const componentName = this.route.component?.name;

    if (componentName === 'CategoriesComponent') {
      const element = document.getElementById(section);

      if (element) {        
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - 100;
        window.scrollTo({ top: targetY, behavior: 'auto' });
      }
    } else {     
      this.router.navigate(['/categories'], { state: { section: section }});
    }
  }  

  public onClickServices(): void {
    this.router.navigate(['/services']);
  }

  public onClickSearch(search: String): void {
    this.router.navigate(['/search'], { state: { search: search }});
  }
}
