import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalRecordDetailPage } from './medical-record-detail';

@NgModule({
  declarations: [
    MedicalRecordDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalRecordDetailPage),
  ],
})
export class MedicalRecordDetailPageModule {}
