import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalHistoryDetailPage } from './medical-history-detail';

@NgModule({
  declarations: [
    MedicalHistoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalHistoryDetailPage),
  ],
})
export class MedicalHistoryDetailPageModule {}
