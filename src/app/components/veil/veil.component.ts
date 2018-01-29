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
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('void => visible', [
        animate(100)
      ]),
      transition('visible => void', [
        animate(100)
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
