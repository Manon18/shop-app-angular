import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'ng-dynami-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@NgModule({
  declarations: [],
  imports: [],
  providers: [ AuthService, AuthenticationService ],
  exports: [ HeaderComponent ]
})

export class HeaderComponent implements OnInit {

  constructor(public router: Router,
    private _authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

}
