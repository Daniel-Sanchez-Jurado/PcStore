import { CartModule } from './cart/cart.module';
import { CategoriesModule } from './categories/categories.module';
import { DetailModule } from './detail/detail.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { OurServicesModule } from './ourServices/ourServices.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [],
  imports: [
    LoginModule, 
    HomeModule,
    DetailModule,
    CartModule,
    CategoriesModule,
    OurServicesModule,
    SearchModule
  ],
  exports: [
    LoginModule, 
    HomeModule,
    DetailModule,
    CartModule,
    CategoriesModule,
    OurServicesModule,
    SearchModule
  ],
  providers: [],
})
export class PagesModule {}
/* Se crea Pages module donde se importa y exporta las dos páginas creadas: login y register.
   Y así al importar esta clase en app.module.ts le llegan las páginas creadas.
*/