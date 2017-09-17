import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthenticationService } from './shared/services/authentication.service';
import { DatabaseService } from './shared/services/database.service';
import { ModalService } from 'app/shared/services/modal.service';
import { StorageService } from 'app/shared/services/storage.service';

import { AppRoutingModule } from './routing/app-routing.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrandHeaderComponent } from './components/brand-header/brand-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainComponent,
    BrandHeaderComponent
  ],
  imports: [
    BrowserModule,
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
