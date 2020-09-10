import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firestore } from 'firebase/app';
@Component({
  selector: 'app-virtual-race',
  templateUrl: './virtual-race.component.html',
  styleUrls: ['./virtual-race.component.scss']
})
export class VirtualRaceComponent implements OnInit {

  constructor(readonly router: Router) { }

  ngOnInit() {
    document.title = 'Carrera Virtual 2020 Fundación Soñar - Corre por Cúcuta';
  }
  public navigateToRegistration(){
    this.router.navigateByUrl('registro');
  }
  public scrollTo(section){
    switch (section) {
      case 0:
        var elmnt = document.getElementById("shirts-banner");
        elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        break;

      default:
        break;
    }
  }
}
