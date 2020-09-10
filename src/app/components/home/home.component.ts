import { Component, OnInit, HostListener } from '@angular/core';
import { auth, firestore } from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(readonly navigator: Router) { }
  runners: any[];
  databaseResults: any;
  newSignup: any;
  finishedRegistration = false;
  topPosition: any;
  pulledNavbar: false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    console.log(window.pageYOffset);
    this.topPosition = window.pageYOffset;
  }

  ngOnInit() {
    this.newSignup = {
      name: undefined,
      age: undefined,
      email: undefined,
      distance: undefined,
      gender: undefined,
      size: undefined,
      eps: undefined,
      bloodType: undefined,
      registrationDate: undefined,
      identity_document: undefined,
      phone_number: undefined,
    }

  }

  public pullNavbar(bool){
    this.pulledNavbar = bool;
  }

  public navigate(url){
    this.navigator.navigateByUrl(url);
  }

  public updateSelectedDistance(distance){
    this.newSignup.distance = distance;
  }
  public updateSelectedAge(age){
    this.newSignup.age = age;
  }
  public updateSelectedGender(gender){
    this.newSignup.gender = gender;
  }
  public updateSelectedSize(size){
    this.newSignup.size = size;
  }
  public updateSelectedBloodType(type){
    this.newSignup.bloodType = type;
  }
  public readSignup(newSignup){
    this.newSignup.registrationDate = Date.now();
    firestore().collection('registrations').doc().set({
      name: this.newSignup.name,
      email: this.newSignup.email,
      age: this.newSignup.age,
      distance: this.newSignup.distance,
      gender: this.newSignup.gender,
      size: this.newSignup.size,
      eps: this.newSignup.eps,
      bloodType: this.newSignup.bloodType,

      identity_document: this.newSignup.identity_document,
      registrationDate: Date.now(),
    });

    setTimeout(_ => {
      this.finishedRegistration = true;
    },1000)
  }

  public getRunners(){
    let runners = [];
    firestore().collection('virtualRegistrations').get({}).then(_ => {
      if(_.docs.length > 0){
        _.docs.map(doc => {
          this.databaseResults = _.docs.length;
          let runner = doc.data({});
          runner.address = '';
          runner.actualDate = new Date(runner.registrationDate);
          runner.actualDate = runner.actualDate.toString();

          switch (runner.registrationType) {
            case 1:
              runner.registrationType = 'GRATIS';
              runner.size = 'no aplica';
              runner.shirtOption = 'no aplica';
              break;
              case 2:
              runner.registrationType = 'MEDALLA';
              runner.size = 'no aplica';
              runner.shirtOption = 'no aplica';
              break;
              case 3:
              runner.registrationType = 'CAMISA';
              // tslint:disable-next-line:max-line-length
              runner.shirtOption = runner.shirtOption === 0 ? 'CAMISA NEGRA' : runner.shirtOption === 1 ? 'CAMISA AZUL' : runner.shirtOption === 2 ? 'CAMISA ROSADA' : '';
              break;
              case 4:
              runner.registrationType = 'CAMISA + MEDALLA';
              // tslint:disable-next-line:max-line-length
              runner.shirtOption = runner.shirtOption === 0 ? 'CAMISA NEGRA' : runner.shirtOption === 1 ? 'CAMISA AZUL' : runner.shirtOption === 2 ? 'CAMISA ROSADA' : '';
              break;

            default:
              break;
          }

          runners.push(runner);
          if(runners.length === _.docs.length){
            this.runners = runners;
            // console.log(this.runners)
            this.downloadFile(this.runners);
          }
        })
      }
    });
  }


  downloadFile(data, filename='REGISTROS AGOSTO 28 - CORRE X CUCUTA VIRTUAL') {
      if(this.databaseResults === this.runners.length){
        let csvData = this.ConvertToCSV(this.runners, ['address','bloodType', 'email','eps','gender','identityDocument','instagram', 'name', 'paymentStatus', 'phoneNumber', 'registrationType', 'shirtOption', 'size', 'actualDate','payuReference']);
        // console.log(csvData)
        let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
      }
}

ConvertToCSV(objArray, headerList) {
     let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
     let str = '';
     let row = 'S.No,';

     for (let index in headerList) {
         row += headerList[index] + ',';
     }
     row = row.slice(0, -1);
     str += row + '\r\n';
     for (let i = 0; i < array.length; i++) {
         let line = (i+1)+'';
         for (let index in headerList) {
            let head = headerList[index];

             line += ',' + array[i][head];
         }
         str += line + '\r\n';
     }
     return str;
 }

}


