import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { OperationsComponent } from './component/operations/operations.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RecordComponent } from './component/record/record.component';
import { FooterComponent } from './component/footer/footer.component';
import { ROUTING } from './app.routes';

//import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OperationsComponent,
    LoginComponent,
    RegisterComponent,
    RecordComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
