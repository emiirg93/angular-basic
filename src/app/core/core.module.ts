import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NoPageFoundComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NoPageFoundComponent
  ]
})
export class CoreModule { }
