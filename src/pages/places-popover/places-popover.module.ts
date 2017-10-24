import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesPopoverPage } from './places-popover';

@NgModule({
  declarations: [
    PlacesPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesPopoverPage),
  ],
})
export class PlacesPopoverPageModule {}
