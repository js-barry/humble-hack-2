import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiServiceProvider} from "../api-service/api-service";
import {User} from "../../models/user";
import {Observable} from "rxjs/Observable";



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  currentUser : User;
  constructor(private apiServiceProvider : ApiServiceProvider) {

    apiServiceProvider.get('/users/anmishra/').subscribe(data => {

      this.currentUser = new User(data);
      console.log("hello")
    })

  }

  getCurrentUser(): Observable<User> {
    return this.apiServiceProvider.get('/users/anmishra/')
        .map(userData => new User(userData));
  }

}
