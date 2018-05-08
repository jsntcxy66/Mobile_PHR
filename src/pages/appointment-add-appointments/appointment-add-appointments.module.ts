import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentAddAppointmentsPage } from './appointment-add-appointments';

@NgModule({
  declarations: [
    AppointmentAddAppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentAddAppointmentsPage),
  ],
})
export class AppointmentAddAppointmentsPageModule {}
