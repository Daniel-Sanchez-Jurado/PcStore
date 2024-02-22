import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'ourServices',
  templateUrl: './ourServices.component.html',
  styleUrls: ['./ourServices.component.css'],
})
export class OurServicesComponent implements OnInit {
  
  cartCounter: number;

  constructor(
    private router: Router,
    private titulo: Title,
    private articlesService: ArticlesService
    ) {
      titulo.setTitle('PcStore - Home');
      this.cartCounter = this.articlesService.cartCounter;
    }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
