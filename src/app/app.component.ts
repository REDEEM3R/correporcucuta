import { Component, HostListener } from '@angular/core';
import { initializeApp } from 'firebase';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DefaultUrlSerializer, UrlTree } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cucuta-running';
  topPosition: any;
  pulledNavbar = false;
  curUrl = '';
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    // console.log(window.pageYOffset);
    this.topPosition = window.pageYOffset;
  }

  public pullNavbar(bool){
    this.pulledNavbar = bool;
  }

  constructor(private _route: Router, private curRoute: ActivatedRoute){}
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyDKL1WU5Ep5-ikHaUjF3crAqJ-izOjrHS8",
      authDomain: "correporcucuta.firebaseapp.com",
      databaseURL: "https://correporcucuta.firebaseio.com",
      projectId: "correporcucuta",
      storageBucket: "correporcucuta.appspot.com",
      messagingSenderId: "648158870293",
      appId: "1:648158870293:web:cd5390c83554d3c504071c",
      measurementId: "G-SB463QMBV5"
    };
    // initializeApp(firebaseConfig);
    // console.log(this._route.url);
    this._route.events.subscribe((event) => {
      // console.log(event);
      if (event instanceof NavigationEnd ) {
        this.curUrl = event.url;
        // console.log(this.curUrl);
      }
    });


  }
  public navigateTo(url){
    if(url === this.curUrl){

    }else{
      this.pullNavbar(!this.pulledNavbar);
      this._route.navigateByUrl(url);
    }
  }
}
