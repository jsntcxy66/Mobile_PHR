import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllergyPage } from './allergy';

@NgModule({
  declarations: [
    AllergyPage,
  ],
  imports: [
    IonicPageModule.forChild(AllergyPage),
  ],
})
export class AllergyPageModule {}
