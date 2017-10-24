import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  public endpoint: string;
  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');

    this.endpoint = 'https://5z4govvk81.execute-api.us-east-1.amazonaws.com/Prod'
  }


  get(path: string): Observable<any> {
    return this.http.get(this.endpoint + path);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
        path,
        JSON.stringify(body))
        .map((res: Response) => res.json());
  }

}
