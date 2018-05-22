import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamilyHistoryDetailPage } from './family-history-detail';

@NgModule({
  declarations: [
    FamilyHistoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FamilyHistoryDetailPage),
  ],
})
export class FamilyHistoryDetailPageModule {}
