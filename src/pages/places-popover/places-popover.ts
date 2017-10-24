import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ViewController } from 'ionic-angular';
import {Destination} from "../../models/destination";

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
  chosenDestinations: Destination[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    
    this.allDestinations = [new Destination(1, "montreal", "montreal url"),
      new Destination(2, "chicago", "chicago url"),
      new Destination(3, "seattle", "seattle url"),
      new Destination(4, "london", "london url")];

    this.chosenDestinations = navParams.get('chosenDestinations');
    this.allDestinations = _.difference(this.allDestinations, this.chosenDestinations);
    console.log("wefwe");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPopoverPage');
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
  
  addDestination(destination:Destination) {

    this.chosenDestinations.push(destination);
  }

  removeDestination(destination:Destination) {

    for(var i = 0; i < this.chosenDestinations.length; i++) {
      if(this.chosenDestinations[i] == destination){
        this.chosenDestinations.splice(i, 1);
      }
    }
  }

}
