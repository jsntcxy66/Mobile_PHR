import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImmunizationPage } from './immunization';

@NgModule({
  declarations: [
    ImmunizationPage,
  ],
  imports: [
    IonicPageModule.forChild(ImmunizationPage),
  ],
})
export class ImmunizationPageModule {}
