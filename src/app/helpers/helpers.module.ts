import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner-box-cut/spinner.component';
import { SpinnerBoxLiftComponent } from './spinner/spinner-box-lift/spinner-box-lift.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SpinnerComponent,
    SpinnerBoxLiftComponent,
  ],
  exports: [
    SpinnerComponent,
    SpinnerBoxLiftComponent,
  ],
})
export class HelpersModule {
}
