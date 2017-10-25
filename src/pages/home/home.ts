import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserPoints } from '../../models/userPoints';
import { IonicPage, NavController } from 'ionic-angular';
import { UserProvider } from "../../providers/user/user";
import { ApiServiceProvider } from "../../providers/api-service/api-service";

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
  private userRank: UserPoints;
  private cities: Map<number, { name: string, url: string }>;


  medals: any[];

  constructor(public navCtrl: NavController, private userProvider: UserProvider) {
    this.medals = new Array();

    userProvider.getCurrentUser().subscribe(user => {
      this.user = user;

      for (let key in user.getInfo().getScore().getAffinities()) {
        let value = user.getInfo().getScore().getAffinities()[key];
        let className = this.getClassName(value);
        this.medals.push({
          class: className,
          name: key,
          points: value
        });
      }

      for (let key in user.getInfo().getScore().getCities()) {
        let value = user.getInfo().getScore().getCities()[key];
        let className = this.getClassName(value);
        let keyName = userProvider.cities.get(Number.parseInt(key)).name;
        this.medals.push({
          class: className,
          name: keyName,
          points: value
        });
      }

      this.medals.sort((a, b) => {
        if (a.points > b.points) {
          return -1;
        } else if (a.points < b.points) {
          return 1;
        } else {
          return 0;
        }
      })
    });

    userProvider.getRank().subscribe(rank => {
      this.userRank = rank;
    });
  }

  private getClassName(value: number): string {
    if (value > 100) {
      return "gold";
    } else if (value > 50) {
      return "silver";
    } else if (value > 10) {
      return "bronze";
    } else {
      return "notAchieved"
    }
  }
}
