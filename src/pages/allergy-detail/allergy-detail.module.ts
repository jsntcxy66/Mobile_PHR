import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllergyDetailPage } from './allergy-detail';

@NgModule({
  declarations: [
    AllergyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AllergyDetailPage),
  ],
})
export class AllergyDetailPageModule {}
