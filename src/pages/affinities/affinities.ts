import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AffinitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-affinities',
  templateUrl: 'affinities.html',
})
export class AffinitiesPage {
  totalAffinities: Affinity[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.totalAffinities = [
      new Affinity("fish tacoes", false),
      new Affinity("family friendly", false),
      new Affinity("romantic", false),
      new Affinity("cheese", false),
      new Affinity("wine", false),
      new Affinity("luxury", false),
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AffinitiesPage');
  }

  affinityClicked(affinity: Affinity) {
    affinity.selected = !affinity.selected;
  }
}

class Affinity {
  name: string;
  selected: boolean;

  constructor(name: string, selected: boolean) {
    this.name = name;
    this.selected = selected;
  }
}