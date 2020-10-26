import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Route, Router, Navigation } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal, * as swal from 'sweetalert2';
import * as htmlToImage from 'html-to-image';
@Component({
  selector: 'app-race-day',
  templateUrl: './race-day.component.html',
  styleUrls: ['./race-day.component.scss']
})
export class RaceDayComponent implements OnInit {

  downloadingCertificate = false;
  currentSection = 0;
  idtosearch: number;
  runnerData: any;
  loading: boolean;
  personalData: any;
  evidencePicture: File = null;
  evidencePictureUrl: any;
  pendingRegistration: any;
  podiumRunners: any;
  totalRunners: any;
  constructor(
    readonly route: Router ,
    readonly storage: AngularFireStorage,
    readonly firestore: AngularFirestore,
    readonly location: Location,
  ) { }

  ngOnInit() { 
    this.runnerData = undefined;
    this.loading = false;
    this.idtosearch = undefined;
  
    switch (this.route.url) {
      case '/carrera':
          this.currentSection = 0;
        break;
      case '/carrera/registro':
          this.currentSection = 1;
          if(localStorage.getItem('cachedId') !== null && localStorage.getItem('cachedId') !== undefined ){
            this.firestore.collection('virtualRegistrations').doc(localStorage.getItem('cachedId')).ref.get().then(racerData => {
                this.startSearch(racerData.data().identityDocument);
            })
          }else{
            this.currentSection = 0;
            this.location.go('carrera');
          }
        break;
      case '/carrera/mi-tiempo':
          this.currentSection = 2;
          if(localStorage.getItem('cachedId') !== null && localStorage.getItem('cachedId') !== undefined ){
            this.firestore.collection('virtualRegistrations').doc(localStorage.getItem('cachedId')).ref.get().then(racerData => {
                this.startSearch(racerData.data().identityDocument);
            })
          }else{
            this.currentSection = 0;
            this.location.go('carrera');
          }

        break;
      default:
        break;
    }
  }

  public startSearch(number: any){
    if(number!==undefined && number !== null){
      number = parseInt(number);
      this.loading = true;
      this.firestore.collection('raceRegistry').ref.where('identityDocument','==', number).get().then(_ => {
        if(_.docs.length === 1){
          this.runnerData = _.docs[0].data();
          this.firestore.collection('virtualRegistrations').ref.where('identityDocument', '==',number).get().then(_ => {
            if(_.docs.length >= 1){
              this.personalData = _.docs[0].data();
              localStorage.setItem('cachedId',_.docs[0].data().id);
              if(this.runnerData.status === 0){
                this.storage.ref(this.runnerData.evidencePicture).getDownloadURL().subscribe(url => {
                  this.evidencePictureUrl = url;
                })
                this.location.go('carrera/mi-tiempo');
                this.currentSection = 2;
                this.loading = false;     
                
                this.podiumRunners = [];   
                let interfPodiumArr = [] ;
                this.firestore.collection('raceRegistry').ref.where('distance', '==', this.runnerData.distance).get().then(podium => {
                  podium.docs.map(pod => {
                    
                    let interfP = pod.data();
                    interfP.timeInS = (interfP.time.hours * 60 * 60) + (interfP.time.minutes * 60) + (interfP.time.seconds);
                    
                    interfPodiumArr.push(interfP);
                    if(podium.docs.length === interfPodiumArr.length){
                      interfPodiumArr.sort(function (a, b) {
                        return a.timeInS - b.timeInS;
                      });
                      interfPodiumArr.map(document => {
                        if(document.identityDocument === this.personalData.identityDocument){
                          this.runnerData.position = interfPodiumArr.indexOf(document);
                        }
                      });
                      for (let index = 0; index < 10; index++) {
                        const element = interfPodiumArr[index];
                        this.firestore.collection('virtualRegistrations').ref.where('identityDocument','==', element.identityDocument).get().then(result => {
                          element.name = result.docs[0].data().name;
                          element.position = index;
                          this.podiumRunners.push(element);

                          if(this.podiumRunners.length <= 10){
                            // console.log(this.podiumRunners);
                          }
                        })
                      }
                    }
                  })

                })

                this.firestore.collection('virtualRegistrations').ref.where('distance', '==', this.runnerData.distance).get().then(totalR => {
                  this.totalRunners = totalR.docs.length;
                });

              }else if(this.runnerData.status === undefined){
                this.location.go('carrera/registro');
                this.currentSection = 1;
                this.loading = false;
              }
            }else{
              this.loading = false;
              swal.default.fire('Error', 'Tu documento de identidad no se encuentra registrado en la carrera. Verifica tus datos. ','info');
            }
          })
        }else{
          this.firestore.collection('virtualRegistrations').ref.where('identityDocument', '==',number).get().then(_ => {
            if(_.docs.length >= 1){
              // console.log(_.docs[0].data())
              this.personalData = _.docs[0].data();
              this.runnerData = {
                identityDocument: this.personalData.identityDocument,
                time: {
                  hours: undefined,
                  minutes: undefined,
                  seconds: undefined,
                },
                status: 0,
                distance: this.personalData.distance,
                routeFollowed: null,
                evidencePicture: undefined,
              }
              this.loading = false;
              this.currentSection = 1;
              this.location.go('carrera/registro');
              localStorage.setItem('cachedId',_.docs[0].data().id);
            }else{
              this.loading = false;
              swal.default.fire('Error', 'Tu documento de identidad no se encuentra registrado en la carrera. Verifica tus datos. ','info');
            }
          })
        }
      })
    }else{
      swal.default.fire('Error', 'Tu documento de identidad no puede ser vacío.','info');
    }
    window.scrollTo(0,0);
  }

  saveRunnerData(data){
    this.loading = true;
    if(this.personalData.distance === undefined || data.time.hours === undefined || data.time.hours === null || data.time.minutes === undefined || data.time.minutes === null || data.time.seconds === null || data.time.seconds === undefined || this.evidencePicture === undefined || this.evidencePicture === null){
      this.loading = false;
      swal.default.fire('Error', 'Revisa que tus tiempos, distancia y la captura de evidencia han sido rellenados','info');
    }else{
      this.storage.upload('/evidences/'+this.personalData.id,this.evidencePicture).then(_ => {
        _.ref.getDownloadURL().then(url=> {
          // console.log(url);
          data.evidencePicture = url;
        });
        // console.log(data.evidencePicture);
        this.firestore.collection('raceRegistry').ref.add({
          identityDocument: this.personalData.identityDocument,
                time: {
                  hours: data.time.hours,
                  minutes: data.time.minutes,
                  seconds: data.time.seconds,
                },
                status: 0,
                distance: this.personalData.distance,
                routeFollowed: data.routeFollowed!==undefined?data.routeFollowed:null,
                evidencePicture: "/evidences/"+this.personalData.id,
        }).then(_ => {
          swal.default.fire('Felicidades', 'Tus datos han sido guardados satisfactoriamente.','info'); 
          this.currentSection = 2;
          this.location.go('carrera/mi-tiempo');
          this.loading = false;
        })
      });
  
    }
    
    // this.firestore.collection('raceRegistry').doc().ref.set({
    window.scrollTo(0,0);
    // })
  }

  preloadPicture(files: FileList){
    this.evidencePicture = files.item(0);

  }

  resetForm(){
    localStorage.removeItem('cachedId');
    this.currentSection = 0;
    window.scrollTo(0,0);
    this.location.go('carrera');
  }

  seePodium(){
    swal.default.fire('Ya corriste por nuestros niños', 'Revisa esta página en los próximos días para acceder al podio de '+this.personalData.distance+' Km','success'); 
  }

  downloadCertificate(){
    // swal.default.fire('Gracias '+this.personalData.name, 'Cumpliste con tu meta y ayudamos a nuestros niños. Revisa esta página en los próximos días para acceder a tu certificado de terminación','success'); 
    this.downloadingCertificate = true;
    let that = this;
    this.loading = true;
    setTimeout(_ =>{
      htmlToImage.toBlob(document.getElementById('certificate4download'))
      .then(function (blob) {
        let dwldLink = document.createElement("a");
          let url = URL.createObjectURL(blob);
          let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
          if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
              dwldLink.setAttribute("target", "_blank");
          }
          dwldLink.setAttribute("href", url);
          dwldLink.setAttribute("download", 'certificado.correporcucuta.sonar-'+that.personalData.name + ".png");
          dwldLink.style.visibility = "hidden";
          document.body.appendChild(dwldLink);
          dwldLink.click();
          document.body.removeChild(dwldLink);
          setTimeout(tout => {
            that.downloadingCertificate = false;
            that.loading = false;
          }, 500)
      });
    }, 1000)
    
  }

  startNewRegistration(){
    this.currentSection = 3;
    this.pendingRegistration = {
      name: null,
      distance: null,
      address: null,
      email: null,
      phoneNumber: null,
      identityDocument: null,
    }
  }
  saveNewRegistrationAndSearch(){
    if(this.pendingRegistration.name === null || this.pendingRegistration.name === '' || this.pendingRegistration.distance === null ||  this.pendingRegistration.distance === '' || this.pendingRegistration.address === null || this.pendingRegistration.address === '' || this.pendingRegistration.email === null || this.pendingRegistration.email === '' || this.pendingRegistration.phoneNumber === null || this.pendingRegistration.phoneNumber === '' ){
      swal.default.fire('Error', 'Tienes campos faltantes para hacer el registro','info');
    }else{
      // console.log(this.pendingRegistration);
      this.firestore.collection('virtualRegistrations').add(this.pendingRegistration).then(_ => {
        this.firestore.collection('virtualRegistrations').doc(_.id).update({id: _.id}).then( result => {
          this.startSearch(this.pendingRegistration.identityDocument);
        })
      })
    }
  }
  updateSelectedDistanceBackup(distance){
    this.pendingRegistration.distance = distance;
  }
  updateSelectedDistanceBackupVirtual(distance){
    this.personalData.distance = distance;
    this.loading = true;
    this.firestore.collection('virtualRegistrations').doc(this.personalData.id).update({distance: this.personalData.distance}).then(_ => {
      this.loading = false;
    })
  }
  
}
