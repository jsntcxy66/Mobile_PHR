import { NgModule } from '@angular/core';
import { TileComponent } from './tile/tile';
import { DynamicFormComponent } from './dynamic-form/dynamic-form';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question';
import { CalendarComponent } from './calendar/calendar';
@NgModule({
	declarations: [TileComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    CalendarComponent],
	imports: [],
	exports: [TileComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    CalendarComponent]
})
export class ComponentsModule {}
