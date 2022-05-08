import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatefulService } from '../services/stateful.service';
import { FeatureComponent } from './feature.component';


@NgModule({
  declarations: [
    FeatureComponent
  ],
  exports: [FeatureComponent],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
