import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  HostBinding,
} from '@angular/core';

// services
import { ModalService } from '../../shared/services/modal.service';

// types
import { Modal } from '../../shared/types/modal.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @HostBinding('class') classes;
  @Input('type') type: string;
  @ViewChild('contentContainer', { read: ViewContainerRef }) contentContainer;

  public properties;

  constructor(
    private modalService: ModalService,
    private componentFactory: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.classes = this.properties.type;
    this.modalService.modal$.subscribe(component => this.loadContent(component));
  }

  public cancel (modal: Modal): void {
    // this.modalService.destroyModal(modal);
  }

  public loadContent (component) {
    const contentFactory = this.componentFactory.resolveComponentFactory(component.component);
    this.contentContainer.createComponent(contentFactory, 0, undefined, [component.container.location.nativeElement]);
  }
}
