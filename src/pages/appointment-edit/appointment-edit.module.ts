import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentEditPage } from './appointment-edit';

@NgModule({
  declarations: [
    AppointmentEditPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentEditPage),
  ],
})
export class AppointmentEditPageModule {}
