import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../shared/model/Account';
import { AccountService } from '../../shared/service/account.service';

@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css']
})
export class AccountNewComponent implements OnInit {

  accountForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.accountForm = this.formBuilder.group({
      fName: ["", Validators.required],
      lName: "",
      cin: ["", Validators.required],
      address1: ["", Validators.required],
      address2: "",
      phone: ""
    })
  }


  
  onSubmitForm():void{

    const formValue = this.accountForm.value;
    const newAccount = new Account();
    newAccount.fName = formValue["fName"];
    newAccount.lName = formValue["lName"];
    newAccount.cin = formValue["cin"];
    newAccount.address1 = formValue["address1"];
    newAccount.address2 = formValue["address2"];
    newAccount.phone = formValue["phone"];

    this.accountService.addAccount(newAccount).subscribe(
      result => { this.router.navigate(["/account/accounts"]) },
      (error: HttpErrorResponse) => console.log(error.error.message)
    )
      
  }

}
