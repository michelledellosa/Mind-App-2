import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeTrackerDirectiveDirective } from './iframe-tracker-directive.directive';



@NgModule({
  declarations: [
    IframeTrackerDirectiveDirective
  ],
  exports: [IframeTrackerDirectiveDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
