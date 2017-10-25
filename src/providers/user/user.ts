import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiServiceProvider } from "../api-service/api-service";
import { User } from "../../models/user";
import { UserPoints } from "../../models/userPoints";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  currentUser: User;
  cities: Map<number, { name: string, url: string }>;

  constructor(private apiServiceProvider: ApiServiceProvider) {
    this.cities = new Map();
    this.cities.set(4005, { name: "Montreal", url: "assets/imgs/montreal.jpg" });
    this.cities.set(3121, { name: "Seattle", url: "assets/imgs/seattle.jpg" });
    this.cities.set(829, { name: "Chicago", url: "assets/imgs/chicago.jpg" });
    this.cities.set(2114, { name: "London", url: "assets/imgs/london.jpg" });

    apiServiceProvider.get('/users/anmishra/').subscribe(data => {
      this.currentUser = new User(data);
      console.log("hello")
    })

  }

  getCurrentUser(): Observable<User> {
    return this.apiServiceProvider.get('/users/anmishra/')
      .map(userData => new User(userData));
  }

  getRank(): Observable<UserPoints> {
    return this.apiServiceProvider.get('/users/anmishra/rank')
      .map(rankData => new UserPoints(rankData));
  }

  getAffinities(): Observable<string[]> {
    return this.apiServiceProvider.get('/affinities');
  }

  getCities(): Observable<any[]> {
    return this.apiServiceProvider.get('/cities');
  }

  postAffinities(affinities: string[]) {
    return this.apiServiceProvider.post('/users/anmishra', { affinities: affinities });
  }

  postCities(affinities: string[]) {
    return this.apiServiceProvider.post('/users/anmishra', { cities: affinities });
  }
}
