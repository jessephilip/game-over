import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  HostBinding,
} from '@angular/core';
import { ModalService } from './../../shared/services/modal.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  @ViewChild('contentContainer', { read: ViewContainerRef }) contentContainer;
  @ViewChild('headerContainer', { read: ViewContainerRef }) headerContainer;
  @ViewChild('footerContainer', { read: ViewContainerRef }) footerContainer;

  public modalClasses = [];
  public veilClasses = [];
  public componentRef: ComponentRef<any>;
  public disableScroll: boolean;
  public id: number;
  public showVeil: boolean;
  public type: string;

  constructor(
    private modalService: ModalService,
    private componentFactory: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.modalService.modals$.subscribe(modals => {
      modals.forEach(component => this.loadContent(component.properties.content));
    });

    if (this.disableScroll) { this.modalClasses.push('disableScroll'); }

  }

  public cancel = () => {
    this.modalService.destroyModal(this.id);
  }

  public convertClasses = (classes) => classes.join(' ');

  public loadContent (component) {
    const contentFactory = this.componentFactory.resolveComponentFactory(component);
    this.contentContainer.createComponent(contentFactory, 0, undefined, [this.contentContainer.element.nativeElement]);
  }

}
