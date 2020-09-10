import { Component, OnInit } from '@angular/core';
import { auth, firestore } from 'firebase/app';
import { parse } from 'querystring';
import { Location } from '@angular/common';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  runners: any[];
  document2search: any;
  databaseResults: any;
  newSignup: any;
  finishedRegistration = false;
  pendingRegistration: any;
  loading: boolean = true;
  raceSelected: any;
  constructor(
    readonly location: Location,
  ) { }

  ngOnInit() {

    if(
      this.location.path() === '/registro'

    ){
     this.raceSelected = 0;
    }else{
      if(this.location.path() === '/registro-kids'){
        this.raceSelected =1;
      }
    }

    document.title = "Registro Carrera Virtual Fundación Soñar - Corre por Cúcuta"
    setTimeout(_ =>{
      this.loading = false;
    },1500);
    if(localStorage.getItem('pendingSignup') !== null && localStorage !== null){
      let p = JSON.parse(localStorage.getItem('pendingSignup'));
      this.pendingRegistration = {status: true, data: null};
      console.log(p);
      this.getUnfinishedTransaction(p.identityDocument);
      // console.log(this.pendingRegistration);
    }else{
      // console.log('to bien');
      this.pendingRegistration = {
        status: undefined,
        data: undefined,
      }
    }
    this.newSignup = {
      address: undefined,
      name: undefined,
      // age: undefined,
      email: undefined,
      // distance: undefined,
      gender: undefined,
      size: undefined,
      eps: undefined,
      registrationType: undefined,
      // : undefined,
      bloodType: undefined,
      registrationDate: undefined,
      identityDocument: undefined,
      phone_number: undefined,
      city: undefined,
      instagram: undefined,
      shirtOption: undefined,
      contact: {
        name: null,
        phone_number: null,
        relation: null,
      }
    }
  }


  public updateSelectedDistance(distance){
    this.newSignup.distance = distance;
    this.newSignup.age = undefined;
  }
  public updateSelectedDistanceBackup(distance){
    if(this.pendingRegistration.data.distance === undefined){
      this.pendingRegistration.updating = true;
    }
    this.pendingRegistration.data.distance = distance;

  }
  public setPendingTrue(){
    this.pendingRegistration.updating = true;
  }
  updateExistingRegistry(registration){
    this.loading = true;
    firestore().collection('crossVerificationVirtual').doc(registration.identityDocument.toString()).get().then(verified => {
      firestore().collection('virtualRegistrations').doc(verified.data().id).get().then(dbentry => {
        if(dbentry !== undefined){
          firestore().collection('virtualRegistrations').doc(verified.data().id).update({
            address: registration.address,
            distance: registration.distance,

            id: verified.data().id
          }).then(_ => {
            this.loading = false;
            this.pendingRegistration.updating = false;
          });
        }

      });
    });
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
  public updateSelectedRegistration(regType){
    this.newSignup.registrationType = regType;
  }
  public updateSelectedShirt(option){
    this.newSignup.shirtOption = option;

  }
  public readSignup(newSignup){
    this.loading = true;
    this.newSignup.registrationDate = Date.now();
    if(!newSignup.name=== undefined || newSignup.email === undefined || newSignup.gender === undefined || newSignup.bloodType === undefined || newSignup.phone_number === undefined || newSignup.identityDocument === undefined || newSignup.instagram === undefined ){
      alert('Te hacen falta campos para finalizar el registro.');
      this.loading  = false;
    }else{
      firestore().collection('virtualRegistrations').add({
        address: newSignup.address?newSignup.address:null,
        name: newSignup.name?newSignup.name:null,
        email: newSignup.email?newSignup.email:null,
        gender: newSignup.gender?newSignup.gender:null,
        size: newSignup.size?newSignup.size:null,
        eps: newSignup.eps?newSignup.eps:null,
        bloodType: newSignup.bloodType?newSignup.bloodType:null,
        phoneNumber: newSignup.phone_number?newSignup.phone_number:null,
        identityDocument: newSignup.identityDocument?newSignup.identityDocument:null,
        registrationDate: Date.now(),
        city: newSignup.city?newSignup.city:null,
        contact: newSignup.contact?newSignup.contact:null,
        instagram: newSignup.instagram?newSignup.instagram:null,
        shirtOption: newSignup.shirtOption!==undefined?newSignup.shirtOption:null,
        registrationType: newSignup.registrationType,
        paymentStatus: 0
      }).then(savedInstance => {

        firestore().collection('crossVerificationVirtual').doc(newSignup.identityDocument.toString()).set({
          id: savedInstance.id,
          document: newSignup.identityDocument,
          paymentStatus: 0
        }).then(_ => {
          this.loading = false;

          localStorage.setItem('pendingSignup', JSON.stringify(newSignup));
          setTimeout(_ => {
            this.pendingRegistration.status = true;
            this.pendingRegistration.data = newSignup;
            // this.finishedRegistration = true;
            // console.log(this.newSignup);
          },1000)
        })
      }).catch(error=>{
        // console.log(error);
      });
    }



  }

  public resetSignup(){
    this.newSignup = {
      address: undefined,
      name: undefined,
      // age: undefined,
      email: undefined,
      // distance: undefined,
      distance: undefined,
      gender: undefined,
      size: undefined,
      eps: undefined,
      registrationType: undefined,
      // : undefined,
      bloodType: undefined,
      registrationDate: undefined,
      identityDocument: undefined,
      phone_number: undefined,
      instagram: undefined,
      city: undefined,
      shirtOption: undefined,
      contact: {
        name: null,
        phone_number: null,
        relation: null,
      }
    };
    localStorage.removeItem('pendingSignup');
    this.pendingRegistration.status = false;
    this.pendingRegistration.data = undefined;
  };

  public getUnfinishedTransaction(document){

    this.loading  = true;
    let that = this;
    let authRef = firestore().collection('crossVerificationVirtual').doc(document.toString());

    authRef.get().then(function(doc){
      if(doc.exists){
        let data = doc.data();
        let signupRef = firestore().collection('virtualRegistrations').doc(data.id);
        signupRef.get().then(function(information){
          if(information.exists){
            that.pendingRegistration.status = true;
            that.pendingRegistration.registrationType = information.data()['registrationType'];
            that.pendingRegistration.data = information.data();
            localStorage.setItem('pendingSignup', JSON.stringify(information.data()));
            console.log(that.pendingRegistration);
          }
          setTimeout(_=>{

            that.loading = false;
          },1500)
        });
      }else{

        that.newSignup.identity_document = document;
        that.pendingRegistration.status = false;
        localStorage.removeItem('pendingSignup');
        that.pendingRegistration.data = undefined;
        setTimeout(_=>{

          that.loading = false;
        },1500)
      }
    });
  }
}
