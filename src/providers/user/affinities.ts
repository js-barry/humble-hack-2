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
export class AffinitiesProvider {
    affinities: string[];
    constructor(private apiServiceProvider: ApiServiceProvider) {
        this.getAffinities().subscribe(data => {
            this.affinities = data;
        });
    }

    getAffinities(): Observable<string[]> {
        return this.apiServiceProvider.get('/affinities');
    }

    postAffinities(affinities: string[]) {
        return this.apiServiceProvider.post('/users/anmishra', { affinities: affinities });
    }
}
