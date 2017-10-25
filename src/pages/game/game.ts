import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import {ApiServiceProvider} from "../../providers/api-service/api-service";
import {User} from "../../models/user";

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  affinity: string
  features: any[];
  cityId : number[];
  cityName : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService : ApiServiceProvider,
  private modalCtrl : ModalController, public viewCtrl: ViewController) {

    apiService.get("/users/anmishra/question").subscribe(q => {

      this.affinity = q.affinity;
      this.features = q.features;
      this.cityId = q.city;
      console.log(JSON.stringify(q));

      apiService.get("/cities/" + this.cityId).subscribe(city => {
        this.cityName = city.info.name;
      })

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }
  
  nextQuestion() {
    this.apiService.post("/users/anmishra/answer", {
      "city": "4005",
          "affinity": this.affinity,
          "features": {
        "12345": 1,
            "9999999": 0,
            "323984293482934845445323423423": 0,
            "29381293823": 0,
            "34293842934829384293482342": 1
      }
    }).subscribe(res => {
      this.navCtrl.push(GamePage)
    });
  }

  toggleSelected (feature) {
    if (feature.selected && feature.selected === true) {
      feature.selected = false;
    } else {
      feature.selected = true;
    }
  }
  
  done() {
    this.viewCtrl.dismiss();
  }

  skip() {
    this.navCtrl.push(GamePage);
  }

}
