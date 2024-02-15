import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { OurServicesComponent } from './ourServices.component';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [OurServicesComponent],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule
  ],
  exports: [OurServicesComponent],
})
export class OurServicesModule { }
