import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackersPage, PanelPage } from './trackers';

@NgModule({
  declarations: [
    TrackersPage,
    PanelPage
  ],
  imports: [
    IonicPageModule.forChild(TrackersPage),
  ],
  entryComponents: [
    PanelPage,
  ]
})
export class TrackersPageModule {}
