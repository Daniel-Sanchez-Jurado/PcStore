import { CategoriesComponent } from './categories.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    // Se importa CommonModule para poder utilizar ngIf en el .html
    CommonModule, 
    // Se importa FormsModule para poder utilizar ngModel en el .html
    FormsModule
  ],
  exports: [
    // Se exporta RegisterComponent para poderutilizarlo en cualquier sitio
    CategoriesComponent],
  providers: [],
})
// Se exporta RegisterModule para poderlo importar en Pages module
export class CategoriesModule {}
