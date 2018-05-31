import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialHistoryDetailPage } from './social-history-detail';

@NgModule({
  declarations: [
    SocialHistoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialHistoryDetailPage),
  ],
})
export class SocialHistoryDetailPageModule {}
