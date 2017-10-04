import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  animations: [
    trigger('fadeOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
  selector: 'app-veil',
  templateUrl: './veil.component.html',
  styleUrls: ['./veil.component.scss']
})
export class VeilComponent implements OnInit, OnDestroy {

  public classes: string;
  constructor() { }

  ngOnInit() {
    this.classes = 'fadeIn';
  }

  ngOnDestroy() {
    this.classes = 'fadeOut';
  }

  public cancel = () => console.log('hadfasd');

}
