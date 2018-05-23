import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorVisitNotesDetailPage } from './doctor-visit-notes-detail';

@NgModule({
  declarations: [
    DoctorVisitNotesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorVisitNotesDetailPage),
  ],
})
export class DoctorVisitNotesDetailPageModule {}
