// core Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// third party modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// custom modules
import { AppRoutingModule } from './routing/app-routing.module';

// services
import { AuthenticationService } from './shared/services/authentication.service';
import { DatabaseService } from './shared/services/database.service';
import { ModalService } from 'app/shared/services/modal.service';
import { StorageService } from 'app/shared/services/storage.service';

// environment and variables
import { environment } from '../environments/environment';

// pages components
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// component components
import { BrandHeaderComponent } from './components/brand-header/brand-header.component';
import { UploadButtonComponent } from './components/upload-button/upload-button.component';
import { ModalComponent } from './components/modal/modal.component';
import { StopPropagationDirective } from './shared/directives/stop-propagation.directive';
import { LoginsComponent } from './components/logins/logins.component';
import { VeilComponent } from './components/veil/veil.component';
import { ShelfComponent } from './components/shelf/shelf.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainComponent,
    BrandHeaderComponent,
    UploadButtonComponent,
    ModalComponent,
    StopPropagationDirective,
    LoginsComponent,
    VeilComponent,
    ShelfComponent
  ],
  entryComponents: [
    LoginsComponent,
    ModalComponent,
    ShelfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    DatabaseService,
    ModalService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
