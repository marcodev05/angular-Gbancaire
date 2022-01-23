import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private token : string|null|undefined;
  constructor() { }

  /* we need to have more knowledge about local storage to be perfect */

  saveToken(token: string): void{
      localStorage.setItem('$usr-token', token);
  }



  getToken():string{
    if (!this.token) {
      this.token = localStorage.getItem('$usr-token');
    }  
      return this.token;
  }



  removeToken(): void{
    localStorage.removeItem('$usr-token');
  }

}
