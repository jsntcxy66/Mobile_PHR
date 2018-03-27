import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicationtrackerPage } from './medicationtracker';

@NgModule({
  declarations: [
    MedicationtrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicationtrackerPage),
  ],
})
export class MedicationtrackerPageModule {}
