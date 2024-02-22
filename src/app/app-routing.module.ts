import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OurServicesComponent } from './pages/ourServices/ourServices.component';
import { SearchComponent } from './pages/search/search.component';

// Routing con las rutas de los dos componentes para poder navegar entre ellos, de inicio redirige a login.
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'services', component: OurServicesComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', redirectTo: 'login'},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
