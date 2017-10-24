import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import {ViewController } from 'ionic-angular';
import {Destination} from "../../models/destination";

import { HttpClient } from '@angular/common/http';

import * as _ from "lodash";

/**
 * Generated class for the PlacesPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places-popover',
  templateUrl: 'places-popover.html',
})
export class PlacesPopoverPage {

  allDestinations: Destination[];

  constructor(public navParams: NavParams, public viewCtrl: ViewController, private http: HttpClient) {

    this.allDestinations = [];
    this.http.get("https://h5l74qtt9e.execute-api.us-east-1.amazonaws.com/Prod/cities")
        .subscribe((data: any[]) => {

          data.forEach(city => {
            this.allDestinations.push(new Destination(city.id, city.info.name, city.info.image, false))
          })
          console.log(data);
          var userDestinations = navParams.get('userDestinations');
          var array = _.map(this.allDestinations, "id");
          var values = _.map(userDestinations, "id");
          var diff : any[]= _.difference(array, values);
          this.allDestinations = _.filter(this.allDestinations, function(obj) { return diff.indexOf(obj.id) >= 0; });
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPopoverPage');
  }

  dismiss() {
    let data = _.filter(this.allDestinations, "selected");
    this.viewCtrl.dismiss(data);
  }
  
  toggleSelected(destination:Destination) {

    if(destination.selected && destination.selected === true) {
      destination.selected = false;
    } else {
      destination.selected = true;
    }
  }

}
