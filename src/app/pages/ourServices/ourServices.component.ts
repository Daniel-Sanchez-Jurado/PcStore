import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'ourServices',
  templateUrl: './ourServices.component.html',
  styleUrls: ['./ourServices.component.css'],
})
export class OurServicesComponent implements OnInit {
  
  cartCounter: number;
  bodyHeight: number;

  constructor(
    private router: Router,
    private titulo: Title,
    private articlesService: ArticlesService,
    private elementRef: ElementRef
    ) {
      titulo.setTitle('PcStore - Home');
      this.cartCounter = this.articlesService.cartCounter;
      this.bodyHeight = 0;
    }

  ngOnInit() {}

  ngAfterViewInit() {
    // Acceder al elemento <body> del DOM
    const bodyElement = document.body;

    // Verificar si el elemento <body> está definido
    if (bodyElement) {
      // Obtener el tamaño vertical en píxeles del elemento <body>
      this.bodyHeight = bodyElement.offsetHeight;
      
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

  public onClickProduct(): void {
    this.router.navigate(['/detail']);
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
