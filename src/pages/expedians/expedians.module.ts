import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpediansPage } from './expedians';

@NgModule({
  declarations: [
    ExpediansPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpediansPage),
  ],
})
export class ExpediansPageModule {}
