import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatefulService } from '../services/stateful.service';
import { FeatureComponent } from './feature.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FeatureComponent
  ],
  exports: [FeatureComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class FeatureModule { }
