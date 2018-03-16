import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodtrackerPage } from './foodtracker';

@NgModule({
  declarations: [
    FoodtrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodtrackerPage),
  ],
})
export class FoodtrackerPageModule {}
