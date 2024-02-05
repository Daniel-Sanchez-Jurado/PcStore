import { CartModule } from './cart/cart.module';
import { CartComponent } from './cart/cart.component';
import { DetailModule } from './detail/detail.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    LoginModule, 
    HomeModule,
    DetailModule,
    CartModule
  ],
  exports: [
    LoginModule, 
    HomeModule,
    DetailModule,
    CartModule
  ],
  providers: [],
})
export class PagesModule {}
/* Se crea Pages module donde se importa y exporta las dos páginas creadas: login y register.
   Y así al importar esta clase en app.module.ts le llegan las páginas creadas.
*/