import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurgicalHistoryPage } from './surgical-history';

@NgModule({
  declarations: [
    SurgicalHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SurgicalHistoryPage),
  ],
})
export class SurgicalHistoryPageModule {}
