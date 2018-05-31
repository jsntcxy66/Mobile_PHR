import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialHistoryCategoryPage } from './social-history-category';

@NgModule({
  declarations: [
    SocialHistoryCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialHistoryCategoryPage),
  ],
})
export class SocialHistoryCategoryPageModule {}
