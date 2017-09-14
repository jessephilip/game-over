import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components for routing
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { MainComponent } from '../pages/main/main.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
