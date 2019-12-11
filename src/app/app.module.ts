import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DynamiSocialLoginModule, AuthServiceConfig, AuthService, FacebookLoginProvider, GoogleLoginProvider, LoginProviderClassModel } from 'ng-dynami-social-login';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BasketService } from './core/services/basket.service';
import { LocalStorageService } from './core/services/local-storage.service';
import { AuthenticationService } from './core/services/authentication.service';

export function authServiceConfigs() {
  const facebook_oath_lient_id: string = '784456641977614';

  let config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider(facebook_oath_lient_id)
    }
  ]);

  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamiSocialLoginModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ 
    AuthService,
    AuthenticationService,
    DynamiSocialLoginModule,
    LoginProviderClassModel,
    SharedModule,
    { provide: AuthServiceConfig, useFactory: authServiceConfigs }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
