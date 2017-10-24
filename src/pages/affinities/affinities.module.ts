import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AffinitiesPage } from './affinities';

@NgModule({
  declarations: [
    AffinitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(AffinitiesPage),
  ],
})
export class AffinitiesPageModule {}
