import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from'./create/create.component';
import { UpdateComponent } from'./update/update.component';
import { AccountantComponent } from'./accountant/accountant.component';
import { FeesComponent } from'./fees/fees.component';
import { ClerkComponent } from './clerk/clerk.component';

import { AuthGuard } from './auth.guard';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateComponent,canActivate:[AuthGuard]},
  { path: 'update', component: UpdateComponent,canActivate:[AuthGuard]},
  { path: 'fees', component: FeesComponent,canActivate:[AuthGuard]},
  { path: 'accountant', component: AccountantComponent,canActivate:[AuthGuard]},
  { path: 'clerk', component: ClerkComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
