import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VaccinationtrackerPage } from './vaccinationtracker';

@NgModule({
  declarations: [
    VaccinationtrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(VaccinationtrackerPage),
  ],
})
export class VaccinationtrackerPageModule {}
