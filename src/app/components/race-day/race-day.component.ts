import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Navigation } from '@angular/router';
@Component({
  selector: 'app-race-day',
  templateUrl: './race-day.component.html',
  styleUrls: ['./race-day.component.scss']
})
export class RaceDayComponent implements OnInit {

  currentSection = 0;

  constructor(
    readonly route: Router 
  ) { }

  ngOnInit() {
    console.log(this.route.url)
    switch (this.route.url) {
      case '/carrera':
          this.currentSection = 0;
        break;
      case '/carrera/registro':
          this.currentSection = 1;
        break;
      case '/carrera/mi-tiempo':
          this.currentSection = 2;
        break;
      default:
        break;
    }
  }

}
