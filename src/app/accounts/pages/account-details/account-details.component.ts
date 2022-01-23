import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {


  fName: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fName = this.route.snapshot.params["id"];
  }

}
