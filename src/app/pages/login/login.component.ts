import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  showPassword: boolean = false;

  users: { username: string; password: string }[] = [
    { username: 'admin', password: 'admin' },
    { username: 'dani', password: 'dani' },
    { username: 'javi', password: 'javi' },
    { username: 'david', password: 'david' }
  ];

  constructor(private router: Router) {}

  onClickLogin(): void {
    console.log('Usuario:', this.user);
    console.log('Contraseña:', this.password);

    if (this.user && this.password) {
      const validUser = this.users.find(
        u => u.username === this.user && u.password === this.password
      );

      if (validUser) {
        this.router.navigate(['/home']);
      } else {
        alert('Credenciales incorrectas');
      }
    } else {
      alert('Por favor, ingresa el usuario y la contraseña');
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
