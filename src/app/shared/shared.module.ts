import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorPipe } from './pipes/theme-color.pipe';
import { NbSpinnerModule, NbInputModule, NbTooltipModule, NbCardModule, NbIconModule, NbButtonModule, NbCheckboxModule } from '@nebular/theme';
import { UiValueUpdateDirective } from './directives/ui-value-update.pipe';
import { ToDatePipe } from './pipes/to-date.pipe';
import { FormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { WithQueryParamsPipe } from './pipes/with-query-params.pipe';



@NgModule({
  declarations: [ThemeColorPipe, UiValueUpdateDirective, ToDatePipe, SanitizeHtmlPipe, WithQueryParamsPipe],
  imports: [
    CommonModule,
    NbSpinnerModule,
    NbInputModule,
    FormsModule,
    NbTooltipModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbCheckboxModule
  ],
  exports: [ThemeColorPipe, NbSpinnerModule, UiValueUpdateDirective, ToDatePipe, NbInputModule, FormsModule, NbTooltipModule, NbCardModule, SanitizeHtmlPipe, NbIconModule, NbButtonModule, NbCheckboxModule, WithQueryParamsPipe]
})
export class SharedModule { }
