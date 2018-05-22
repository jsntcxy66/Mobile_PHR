import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImmunizationHistoryPage } from './immunization-history';

@NgModule({
  declarations: [
    ImmunizationHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ImmunizationHistoryPage),
  ],
})
export class ImmunizationHistoryPageModule {}
