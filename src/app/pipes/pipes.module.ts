import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { SlugifyPipe } from './slugify.pipe';
import { StripHtmlTagsPipe } from './strip-html-tags.pipe';




@NgModule({
  declarations: [
    SafeUrlPipe,
    SlugifyPipe,
    StripHtmlTagsPipe,
    FilterPipe
  ],
  exports: [
    SafeUrlPipe,
    SlugifyPipe,
    StripHtmlTagsPipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
