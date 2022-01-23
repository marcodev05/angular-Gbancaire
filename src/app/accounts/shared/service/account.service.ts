import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../model/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiBaseUrl + "/api/v1/accounts");
  }


  public addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.apiBaseUrl + "/api/v1/accounts/add", account);
  }


}
