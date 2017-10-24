import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { UserPoints } from '../../models/userPoints';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user: User;
  private userPoints: UserPoints;

  medals: any[];

  constructor(public navCtrl: NavController) {
    this.user = new User(
      JSON.parse('{"id":"anmishra","info":{"name":"Ankita Mishra","cities":["4005","829"],"score":20,"affinities":["architecture","museum"],"badges":[]}}')
    );

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

  ngAfterContentInit() {
    console.log(document.getElementById("name"));
    document.getElementById("name").textContent = this.user.getInfo().getName();
    document.getElementById("rankPersonal").textContent = this.userPoints.getPersonal().toString();
    document.getElementById("rankTotal").textContent = this.userPoints.getTotal().toString();
    document.getElementById("points").textContent = this.user.getInfo().getScore().toString();
  }
}
