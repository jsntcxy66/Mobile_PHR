import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackersPage } from './trackers';

@NgModule({
  declarations: [
    TrackersPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackersPage),
  ],
})
export class TrackersPageModule {}
