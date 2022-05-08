import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { StatefulService } from '../services/stateful.service';
import { StatelessService } from '../services/stateless.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  providers: [
    StatefulService
  ]
})
export class FeatureComponent implements OnInit {

  constructor(public stateless: StatelessService, public stateful: StatefulService) { }

  ngOnInit(): void {
  }

  setStatefulVal(){
    this.stateful.counter += 1
  }

  setStatelessVal(){
    this.stateless.counter += 1
  }
}
