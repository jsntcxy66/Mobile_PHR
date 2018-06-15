import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabTestDetailPage } from './lab-test-detail';

@NgModule({
  declarations: [
    LabTestDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LabTestDetailPage),
  ],
})
export class LabTestDetailPageModule {}
