import { Pipe, PipeTransform } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Pipe({
    name: 'userDataMapPipe'
})

export class UserDataMapPipe implements PipeTransform {
    constructor(private _authService: AuthenticationService) {}

    ngOnInit() {}

    transform(data: Object) {
        let dataToDisplay = [];

        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                dataToDisplay.push({key: key, val: data[key]});
            }
        }
        console.log(dataToDisplay);

        return dataToDisplay;
        
    }
}