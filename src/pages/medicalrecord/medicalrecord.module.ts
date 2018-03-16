import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalrecordPage } from './medicalrecord';

@NgModule({
  declarations: [
    MedicalrecordPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalrecordPage),
  ],
})
export class MedicalrecordPageModule {}
