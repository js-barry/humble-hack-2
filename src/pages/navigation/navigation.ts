import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlacesPage } from '../places/places'
import { HomePage } from '../home/home'
import { ExpediansPage } from "../expedians/expedians";
import { AffinitiesPage } from "../affinities/affinities";
import { BadgesPage } from "../badges/badges";

/**
 * Generated class for the NavigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  tab5: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tab1 = HomePage;
    this.tab2 = AffinitiesPage;
    this.tab3 = PlacesPage;
    this.tab4 = BadgesPage;
    this.tab5 = ExpediansPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

}
