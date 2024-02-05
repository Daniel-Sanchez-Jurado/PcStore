import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Routing con las rutas de los dos componentes para poder navegar entre ellos, de inicio redirige a login.
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'detail', component: DetailComponent},
  {path: '**', redirectTo: 'login'} ,
  { path: '', component: HomeComponent },
  { path: 'productos', component: HomeComponent },
  { path: 'categorias', component: HomeComponent },
  { path: 'servicios', component: HomeComponent },
  { path: 'contacto', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
