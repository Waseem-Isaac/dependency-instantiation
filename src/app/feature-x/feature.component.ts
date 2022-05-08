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
  ],
  animations: [
    trigger(
      'valueChanged',
      [
          transition('void => *', []),   // when the item is created
          transition('* => void', []),   // when the item is removed
          transition('* => *', [         // when the item is changed
              animate(200, keyframes([  // animate for 1200 ms
                style ({ background : '#f0f0f0',color: '#fff', offset: 0.0 }),
                style ({ background : 'inherit',color:'inherit', offset: 1.0 }),
              ])),
          ]),
      ]),
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
