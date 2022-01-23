import { Component, OnInit } from '@angular/core';
import { Account } from '../../shared/model/Account';
import { AccountService } from '../../shared/service/account.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  dataSource = this.accounts;
  displayedColumns: String[] = ['accountNb', 'fName', 'phone'];

  ngOnInit(): void {
    this.accountService.getAccounts()
                        .subscribe(
                          (result) => {this.accounts = result;
                          })
                          
  }
 
  
  

 

}



