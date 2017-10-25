import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from "../../providers/user/user";
import { ApiServiceProvider } from "../../providers/api-service/api-service";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
    this.totalAffinities = new Array();
    userProvider.getAffinities().subscribe(affinities => {
      affinities.forEach((affinity) => {
        this.totalAffinities.push(new Affinity(affinity).setSelected(
          this.userProvider.currentUser.getInfo().getAffinities().findIndex((element) => {
            return affinity === element;
          }) >= 0
        ));
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AffinitiesPage');
  }

  ionViewDidLeave() {
    let affinityList = new Array<string>();
    for (let affinity in this.totalAffinities) {
      if (this.totalAffinities[affinity]["selected"] === true) {
        affinityList.push(this.totalAffinities[affinity]["name"]);
      }
    }
    this.userProvider.postAffinities(affinityList).subscribe();
  }

  affinityClicked(affinity: Affinity) {
    affinity.selected = !affinity.selected;
  }
}

class Affinity {
  name: string;
  selected: boolean;

  constructor(name: string) {
    this.name = name;
    this.selected = false;
  }

  setSelected(selected: boolean): Affinity {
    this.selected = selected;
    return this;
  }
}