import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
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
  @ViewChild('contentContainer', { read: ViewContainerRef }) contentContainer;
  @ViewChild('headerContainer', { read: ViewContainerRef }) headerContainer;
  @ViewChild('footerContainer', { read: ViewContainerRef }) footerContainer;

  public componentRef: ComponentRef<ModalComponent>;
  public disableScroll: boolean;
  public id: number;
  public showVeil: boolean;
  public type: string;

  constructor(
    private modalService: ModalService,
    private componentFactory: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.classes = this.type;
    this.modalService.modals$.subscribe(modals => {
      modals.forEach(component => this.loadContent(component.properties.content));
    });
  }

  public cancel = () => this.modalService.destroyModal(this.id);

  public loadContent (component) {
    const contentFactory = this.componentFactory.resolveComponentFactory(component);
    this.contentContainer.createComponent(contentFactory, 0, undefined, [this.contentContainer.element.nativeElement]);
  }
}
