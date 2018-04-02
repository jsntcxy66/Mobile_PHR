import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTrackerPage } from './create-tracker';

@NgModule({
  declarations: [
    CreateTrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTrackerPage),
  ],
})
export class CreateTrackerPageModule {}
