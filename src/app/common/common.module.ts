import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { GooglepickerDirective } from './googlepicker.directive';
import { DropboxchooserDirective } from './dropboxchooser.directive';
import { HxlCheckService } from './hxl-check.service';
import { AnalyticsService } from './analytics.service';
import { HttpInterceptor } from '@angular/common/http';
import { HttpService } from '../shared/http.service';

@NgModule({
  imports: [
    NgCommonModule
  ],
  declarations: [GooglepickerDirective, DropboxchooserDirective],
  exports: [GooglepickerDirective, DropboxchooserDirective],
  providers: [HxlCheckService, AnalyticsService]
})
export class CommonModule { }
