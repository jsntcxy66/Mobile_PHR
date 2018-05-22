import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImmunizationDetailPage } from './immunization-detail';

@NgModule({
  declarations: [
    ImmunizationDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ImmunizationDetailPage),
  ],
})
export class ImmunizationDetailPageModule {}
