import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccountListComponent } from './pages/account-list/account-list.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';
import { AccountNewComponent } from './pages/account-new/account-new.component';

const routes: Routes = [
  {path:"accounts", component: AccountListComponent},
  {path:"new", component: AccountNewComponent},
  {path:"details/:id", component: AccountDetailsComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
