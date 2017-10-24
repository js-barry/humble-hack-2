import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';

import { PlacesPopoverPage } from '../places-popover/places-popover';
import {Destination} from "../../models/destination";



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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  presentPlacesChooserModal() {
    //const profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
    const placesChooser = this.modalCtrl.create(PlacesPopoverPage,
        {userDestinations: [new Destination(1, "montreal", "montreal url", false)]});

    placesChooser.onDidDismiss(data => {
      console.log(data);
    });

    placesChooser.present();
  }

}
