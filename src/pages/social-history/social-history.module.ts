import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialHistoryPage } from './social-history';

@NgModule({
  declarations: [
    SocialHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialHistoryPage),
  ],
})
export class SocialHistoryPageModule {}
