import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { Modal } from '../../shared/types/modal.model';
import { ModalComponent } from './../modal/modal.component';
import { LoginsComponent } from '../logins/logins.component';

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

  // need viewContainerRef = vcRef
  // need componentFactoryResolver = cfr

  constructor(
    private auth: AuthenticationService,
    private modalService: ModalService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
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

  public googleLogin () {
    this.auth.googleLogin();
  }

  public logout () {
    this.auth.logout();
  }

  public loginPopup (event) {
    // create component
    const modalFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    // create reference to component
    const modalRef = this.viewContainerRef.createComponent(modalFactory);
    // establish properties for modal
    const properties = {
      disableScroll: true,
      showVeil: true,
      type: 'right-shelf',
    };

    // set properties to modal instance
    modalRef.instance.properties = properties;
    // properties.type = 'basic';


    // send
    this.modalService.setModal({ component: LoginsComponent, container: modalRef });
  }
}
