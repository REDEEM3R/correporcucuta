import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  navigatedRoute: any;

  constructor(readonly curRoute: Router) { }

  ngOnInit() {
    if(this.curRoute.url.search("21-kilometros") === 22){
      this.navigatedRoute = 1;
      // acerca-de-la-carrera/
    }else if(this.curRoute.url.search("10-kilometros") === 22){
      this.navigatedRoute = 2;
    }else if(this.curRoute.url.search("5-kilometros") === 22){
      this.navigatedRoute = 3;
    }else{
      this.navigatedRoute = 0;
    }
  }

  public navigate(url){
    this.curRoute.navigateByUrl(url);
  }

  

}
