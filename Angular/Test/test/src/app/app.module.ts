import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteGaurdsComponent } from './route-gaurds/route-gaurds.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RouteGaurdsComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
