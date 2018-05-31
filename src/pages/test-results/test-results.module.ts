import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestResultsPage } from './test-results';

@NgModule({
  declarations: [
    TestResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(TestResultsPage),
  ],
})
export class TestResultsPageModule {}
