import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiagnosticProcedurePage } from './diagnostic-procedure';

@NgModule({
  declarations: [
    DiagnosticProcedurePage,
  ],
  imports: [
    IonicPageModule.forChild(DiagnosticProcedurePage),
  ],
})
export class DiagnosticProcedurePageModule {}
