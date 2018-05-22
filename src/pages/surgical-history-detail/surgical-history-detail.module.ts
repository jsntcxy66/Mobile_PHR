import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurgicalHistoryDetailPage } from './surgical-history-detail';

@NgModule({
  declarations: [
    SurgicalHistoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SurgicalHistoryDetailPage),
  ],
})
export class SurgicalHistoryDetailPageModule {}
