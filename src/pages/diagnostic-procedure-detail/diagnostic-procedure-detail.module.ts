import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiagnosticProcedureDetailPage } from './diagnostic-procedure-detail';

@NgModule({
  declarations: [
    DiagnosticProcedureDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DiagnosticProcedureDetailPage),
  ],
})
export class DiagnosticProcedureDetailPageModule {}
