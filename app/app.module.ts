import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FeesComponent } from './fees/fees.component';
import { ClerkComponent } from './clerk/clerk.component';
import { AccountantComponent } from './accountant/accountant.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CreateComponent,
    UpdateComponent,
    FeesComponent,
    ClerkComponent,
    AccountantComponent,
    ReportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
