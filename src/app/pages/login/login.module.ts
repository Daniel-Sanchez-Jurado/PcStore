import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    // Se importa CommonModule para poder utilizar ngIf en el .html
    CommonModule,     
    // Se importa FormsModule para poder utilizar ngModel en el .html
    FormsModule
  ],
  exports: [
    // Se exporta LoginComponent para poderutilizarlo en cualquier sitio
    LoginComponent],
  providers: [],
})
// Se exporta LoginModule para poderlo importar en Pages module
export class LoginModule {}
