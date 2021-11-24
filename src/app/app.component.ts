import {Component} from '@angular/core';
import UsersJson from './users.json';

interface USERS {
    id: number;
    name: String;
    username: String;
    email: String;
    appFlag:Number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'tableWithJson';

    Users: USERS[] = UsersJson;

    constructor() {
        console.log(this.Users);
    }
}
