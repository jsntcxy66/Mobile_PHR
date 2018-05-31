import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackerDetailPage } from './tracker-detail';

@NgModule({
  declarations: [
    TrackerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackerDetailPage),
  ],
})
export class TrackerDetailPageModule {}
