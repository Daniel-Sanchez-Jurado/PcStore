import { Router } from '@angular/router';
import { RegisterForm } from '../../models/registerForm';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [],
})
export class DetailComponent implements OnInit {
  constructor(
    private router: Router,
    private titulo: Title
    ) {
      titulo.setTitle('PcStore - Detalle producto');
    }

  ngOnInit() {}

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