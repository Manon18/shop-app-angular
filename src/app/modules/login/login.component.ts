import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUserModel } from 'ng-dynami-social-login';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, Observer, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDataMapPipe } from 'src/app/core/pipes/user.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@NgModule({
  declarations: [ UserDataMapPipe ],
  providers: [ AuthenticationService, UserDataMapPipe ]
})

export class LoginComponent implements OnInit {
  public userInfo: any;
  public userInfoId: any;
  public observable: Observable<string>;
  public observer: Observer<string>;
  public userData: any;

  constructor(private _authenticationService: AuthenticationService,
    private socioAuthenticationService: AuthService,
    public http: HttpClient,
    public userDataMapPipe: UserDataMapPipe,
    private router: Router) {}

  ngOnInit() {
  }

}
