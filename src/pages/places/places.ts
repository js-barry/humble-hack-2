import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';

import { PlacesPopoverPage } from '../places-popover/places-popover';
import { Destination } from "../../models/destination";

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
  userCities: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public userProvider: UserProvider) {
    this.userCities = new Array();
    this.userProvider = userProvider;
    userProvider.currentUser.getInfo().getCities().forEach((city) => {
      this.userCities.push(userProvider.cities.get(Number.parseInt(city)));
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  presentPlacesChooserModal() {
    //const profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
    const placesChooser = this.modalCtrl.create(PlacesPopoverPage,
      { userDestinations: [new Destination(1, "montreal", "montreal url", false)] });

    placesChooser.onDidDismiss((data: any[]) => {
      let cities = new Array<string>();
      this.userCities = new Array();
      data.forEach((element) => {
        cities.push(element.id);
        this.userCities.push(this.userProvider.cities.get(Number.parseInt(element.id)));
      });

      this.userProvider.postCities(cities).subscribe((value) => {
        this.userProvider.currentUser.getInfo().setCities(cities);
      });
    });
    placesChooser.present();
  }
}
