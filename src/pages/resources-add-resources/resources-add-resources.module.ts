import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResourcesAddResourcesPage } from './resources-add-resources';

@NgModule({
  declarations: [
    ResourcesAddResourcesPage,
  ],
  imports: [
    IonicPageModule.forChild(ResourcesAddResourcesPage),
  ],
})
export class ResourcesAddResourcesPageModule {}
