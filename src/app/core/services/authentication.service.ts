import { Injectable, NgModule } from '@angular/core';
import { AuthService, LoginProviderClassModel, FacebookLoginProvider, GoogleLoginProvider, SocialUserModel } from 'ng-dynami-social-login';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Observer, from } from 'rxjs';

@NgModule({
    declarations: [],
    imports: [],
    exports: [],
    providers: [ AuthService, LoginProviderClassModel ],
    bootstrap: [],
  })

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    public userDetails: any;
    public userInfo: SocialUserModel;
    public isLoggedIn: boolean = false;
    public providerId: string;
    private subscription: Subscription;

    constructor(private socioAuthenticationServ: AuthService,
        private router: Router,
        private http: HttpClient) {}

    ngOnInit() {
    }

    public signInFacebook(socialPlatform: string): Promise<any> {
        let socialPlatformProvider: any;

        if (socialPlatform === 'facebook') {
            this.isLoggedIn = true;

            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        } else if (socialPlatform === 'google') {
            this.isLoggedIn = true;

            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        } 

        return this.socioAuthenticationServ.signIn(socialPlatformProvider)
            .then((res: SocialUserModel) => {
                console.log(res.token);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    public signOutFacebook(): Promise<any> {

        return new Promise((resolve, reject) => {
            if (resolve) {
                this.socioAuthenticationServ.signOut();
            }
        })
    }

    public getUserData(): SocialUserModel {
        this.socioAuthenticationServ.authState.subscribe((user) => {
            this.userInfo = user;
        })
    
        console.log(typeof this.userInfo);
    
        return this.userInfo;
    }
}
