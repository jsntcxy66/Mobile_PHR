import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllergyHistoryPage } from './allergy-history';

@NgModule({
  declarations: [
    AllergyHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(AllergyHistoryPage),
  ],
})
export class AllergyHistoryPageModule {}
