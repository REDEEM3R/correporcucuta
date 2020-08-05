import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-race',
  templateUrl: './virtual-race.component.html',
  styleUrls: ['./virtual-race.component.scss']
})
export class VirtualRaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public scrollTo(section){
    switch (section) {
      case 0:
        var elmnt = document.getElementById("transparent-section");
        elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
        break;
    
      default:
        break;
    }
  }
}
