import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountItemComponent } from './pages/account-item/account-item.component';
import { AccountListComponent } from './pages/account-list/account-list.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountNewComponent } from './pages/account-new/account-new.component';


@NgModule({
  declarations: [
    AccountItemComponent,
    AccountListComponent,
    AccountDetailsComponent,
    AccountNewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
    
    
  ]
})
export class AccountModule { }
