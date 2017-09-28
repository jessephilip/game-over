import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactory,
  ComponentRef,
} from '@angular/core';

import { ModalService } from './shared/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container;

  constructor (
    private modalService: ModalService,
    private componentFactory: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
  }
}
