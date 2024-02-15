import { DetailComponent } from './detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    // Se importa CommonModule para poder utilizar ngIf en el .html
    CommonModule, 
    // Se importa FormsModule para poder utilizar ngModel en el .html
    FormsModule,
    NavbarModule,
    FooterModule
  ],
  exports: [
    // Se exporta DetailComponent para poderutilizarlo en cualquier sitio
    DetailComponent],
  providers: [],
})
// Se exporta RegisterModule para poderlo importar en Pages module
export class DetailModule {}
