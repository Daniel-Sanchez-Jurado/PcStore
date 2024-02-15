import { NgModule } from '@angular/core';
import { NavbarModule } from './navbar/navbar.module';
import { CommonModule } from '@angular/common';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule        
  ],
  exports: [
    NavbarModule,
    FooterModule
  ],
  providers: [],
})
export class ComponentsModule {}
