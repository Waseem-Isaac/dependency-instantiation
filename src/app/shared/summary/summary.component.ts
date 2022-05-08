import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatefulService } from 'src/app/services/stateful.service';
import { StatelessService } from 'src/app/services/stateless.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
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
export class SummaryComponent implements OnInit {
  @Input() stateless !: StatelessService;
  @Input() stateful !: StatefulService;
  
  @Output() onSetStatefulVal$ : EventEmitter<any> = new EventEmitter()
  @Output() onSetStatelessVal$ : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  setStatefulVal(){
    this.onSetStatefulVal$.next();
  }

  setStatelessVal(){
    this.onSetStatelessVal$.next();
  }
}
