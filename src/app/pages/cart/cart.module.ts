import { CartComponent } from './cart.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CartComponent],
  imports: [
   // Se importa CommonModule para poder utilizar ngIf en el .html
   CommonModule, 
   // Se importa FormsModule para poder utilizar ngModel en el .html
   FormsModule
  ],
  exports: [
    // Se exporta RegisterComponent para poderutilizarlo en cualquier sitio
  CartComponent],
  providers: [],
})
// Se exporta RegisterModule para poderlo importar en Pages module
export class CartModule {}
