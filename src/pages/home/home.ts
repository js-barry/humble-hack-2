import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserPoints } from '../../models/userPoints';
import { IonicPage, NavController } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private user: User;
  private userPoints: UserPoints;

  medals: any[];

  constructor(public navCtrl: NavController, private userProvider: UserProvider) {

    userProvider.getCurrentUser().subscribe(user => {
      this.user = user;
    });

    this.userPoints = new UserPoints(
      JSON.parse('{"personal":1,"total":1000}')
    );

    this.medals = [
      {
        class: "gold",
        name: "medalName1",
        points: 233
      },
      {
        class: "silver",
        name: "medalName2",
        points: 120
      },
      {
        class: "bronze",
        name: "medalName3",
        points: 58
      },
      {
        class: "notAchieved",
        name: "medalName4",
        points: 7
      },
      {
        class: "notAchieved",
        name: "medalName5",
        points: 3
      }
    ];
  }

}
