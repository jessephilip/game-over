import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewContainerRef
} from '@angular/core';

// components
import { ModalComponent } from './../modal/modal.component';
import { LoginsComponent } from '../logins/logins.component';

// types
import { Modal } from '../../shared/types/modal.model';

// services
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ModalService } from './../../shared/services/modal.service';

@Component({
  selector: 'app-brand-header',
  templateUrl: './brand-header.component.html',
  styleUrls: ['./brand-header.component.scss']
})
export class BrandHeaderComponent implements OnInit {

  public welcomeMessage = 'Welcome';
  public title = 'Game Over';
  public loggedIn = false;
  public rightShelfRef: ComponentRef<ModalComponent>;
  public rightShelfVisible = false;

  constructor(
    private auth: AuthenticationService,
    private modalService: ModalService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit () {
    this.auth.getUser().subscribe(user => {
      if (user && user.uid) {
        this.loggedIn = true;
        this.welcomeMessage = `Welcome ${user.displayName}`;
      } else {
        this.loggedIn = false;
        this.welcomeMessage = 'Welcome';
      }
    });
  }

  public logout () {
    this.auth.logout();
  }

  public loginPopup () {
    const rightShelf = this.modalService.findModalByType('right-shelf', true);

    if (this.detectRightShelf()) {
      this.modalService.destroyModal(rightShelf[0].id);
      return;
    }

    const modalFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    this.rightShelfRef = this.viewContainerRef.createComponent(modalFactory);

    const properties = {
      componentRef: this.rightShelfRef,
      content: LoginsComponent,
      disableScroll: true,
      showVeil: true,
      type: 'right-shelf'
    };

    const modal = new Modal(properties);
    this.modalService.addModal(modal);
  }

  public detectRightShelf (): boolean {
    const rightShelf = this.modalService.findModalByType('right-shelf', true);
    return rightShelf.length > 0;
  }
}
