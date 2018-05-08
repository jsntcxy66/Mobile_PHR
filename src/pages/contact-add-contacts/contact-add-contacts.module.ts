import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactAddContactsPage } from './contact-add-contacts';

@NgModule({
  declarations: [
    ContactAddContactsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactAddContactsPage),
  ],
})
export class ContactAddContactsPageModule {}
