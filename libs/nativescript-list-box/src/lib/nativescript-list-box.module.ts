import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ListBoxComponent } from './nativescript-list-box.component';

@NgModule({
  imports: [NativeScriptCommonModule],
  declarations: [ListBoxComponent],
  exports: [ListBoxComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class NativeScriptListBoxModule {}
