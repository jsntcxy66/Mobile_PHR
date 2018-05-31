import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicationDetailPage } from './medication-detail';

@NgModule({
  declarations: [
    MedicationDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicationDetailPage),
  ],
})
export class MedicationDetailPageModule {}
