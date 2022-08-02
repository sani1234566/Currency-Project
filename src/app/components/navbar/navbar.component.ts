import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedCurrency:string = "INR";
  constructor(private api: HttpService) { }

  ngOnInit(): void {
  }

  sendCurrency(event:any){
    this.api.seterCurrency(event);
    // console.log(event);
    // this.selectedCurrency = "USD"
  }

}
