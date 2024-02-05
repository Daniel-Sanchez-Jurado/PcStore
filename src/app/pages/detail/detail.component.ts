import { Router } from '@angular/router';
import { RegisterForm } from '../../models/registerForm';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [],
})
export class DetailComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public onClickCart(): void {
    this.router.navigate(['/cart']);
  }
}