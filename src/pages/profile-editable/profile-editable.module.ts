import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileEditablePage } from './profile-editable';

@NgModule({
  declarations: [
    ProfileEditablePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileEditablePage),
  ],
})
export class ProfileEditablePageModule {}
