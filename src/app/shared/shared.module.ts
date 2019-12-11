import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ModulesModule } from '../modules/modules.module';
import { AuthenticationService } from '../core/services/authentication.service';
import { DynamiSocialLoginModule, AuthService, FacebookLoginProvider, GoogleLoginProvider, LoginProviderClassModel } from 'ng-dynami-social-login';

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
    DynamiSocialLoginModule,
    AppRoutingModule
  ],
  exports: [ LayoutComponent ],
  providers: [ AuthenticationService, AuthService ],
  bootstrap: []
})
export class SharedModule { }
