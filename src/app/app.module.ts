import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { LoginComponent } from './nav-routes/login/login.component';
import { FormComponent } from './nav-routes/form/form.component';
import { RouterModule, Routes } from '@angular/router';
 import { HttpClientModule } from '@angular/common/http';
import { FormService } from './service/form.service';
import { ServiceService } from './service.service';
import { FormsModule } from '@angular/forms';
import { CommunicationService } from './service/communication.service';



//rounte path  arry
const appRoutes:Routes=[
  {
    path:'',
    component:LoginComponent
  },
  {
  path:'form',
  component:FormComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    LoginComponent,
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [FormService,ServiceService,CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
