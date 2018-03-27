import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomPanelPage } from './custom-panel';

@NgModule({
  declarations: [
    CustomPanelPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomPanelPage),
  ],
})
export class CustomPanelPageModule {}
