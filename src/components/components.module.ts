import { NgModule } from '@angular/core';
import { TileComponent } from './tile/tile';
import { DynamicFormComponent } from './dynamic-form/dynamic-form';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question';
@NgModule({
	declarations: [TileComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent],
	imports: [],
	exports: [TileComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent]
})
export class ComponentsModule {}
