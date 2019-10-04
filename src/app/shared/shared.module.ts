import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ModulesModule } from '../modules/modules.module';

import { AppRoutingModule } from '../app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ModulesModule,
    AppRoutingModule
  ],
  exports: [ LayoutComponent ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
