import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlcoholtrackerPage } from './alcoholtracker';

@NgModule({
  declarations: [
    AlcoholtrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(AlcoholtrackerPage),
  ],
})
export class AlcoholtrackerPageModule {}
