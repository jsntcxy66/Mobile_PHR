import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorVisitNotesPage } from './doctor-visit-notes';

@NgModule({
  declarations: [
    DoctorVisitNotesPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorVisitNotesPage),
  ],
})
export class DoctorVisitNotesPageModule {}
