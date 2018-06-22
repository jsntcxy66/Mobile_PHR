import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordRetrievePage } from './password-retrieve';

@NgModule({
  declarations: [
    PasswordRetrievePage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordRetrievePage),
  ],
})
export class PasswordRetrievePageModule {}
