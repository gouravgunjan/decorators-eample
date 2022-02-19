import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureChildComponent } from './feature-child/feature-child.component';



@NgModule({
  declarations: [
    FeatureChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ FeatureChildComponent ]
})
export class FeatureAModule { }
