import { Component, OnInit } from '@angular/core';
import { auth, firestore } from 'firebase/app';
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
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('pendingSignup') && localStorage !== null){
      this.pendingRegistration= {
        status: true, 
        data: JSON.parse(localStorage.getItem('pendingSignup')),
      }
      console.log(this.pendingRegistration);
    }else{
      console.log('to bien');
      this.pendingRegistration = {
        status: undefined,
        data: undefined,
      } 
    }
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
      instagram: undefined,
      contact: {
        name: undefined,
        phone_number: undefined,
        relation: undefined,
      }
    }
  }

  
  public updateSelectedDistance(distance){
    this.newSignup.distance = distance;
    this.newSignup.age = undefined;
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

    localStorage.setItem('pendingSignup', JSON.stringify(newSignup));
    firestore().collection('liveRegistrations').add({
      name: this.newSignup.name,
      email: this.newSignup.email,
      age: this.newSignup.age,
      distance: this.newSignup.distance,
      gender: this.newSignup.gender,
      size: this.newSignup.size,
      eps: this.newSignup.eps,
      bloodType: this.newSignup.bloodType,
      phone_number: this.newSignup.phone_number,
      identity_document: this.newSignup.identity_document,
      registrationDate: Date.now(),
      contact: this.newSignup.contact,
      instagram: this.newSignup.instagram,
      paymentStatus: 0
    }).then(savedInstance => {
      firestore().collection('crossVerification').doc(newSignup.identity_document.toString()).set({
        id: savedInstance.id,
        document: newSignup.identity_document,
        paymentStatus: 0
      })
    });

    setTimeout(_ => {
      this.pendingRegistration.status = true;
      this.pendingRegistration.data = newSignup;
      // this.finishedRegistration = true;
      console.log(this.newSignup);
    },1000)
  }

  public getUnfinishedTransaction(document){
    let that = this;
    let authRef = firestore().collection('crossVerification').doc(document);
    this.newSignup.identity_document = document;
    authRef.get().then(function(doc){
      if(doc.exists){
        let data = doc.data();
        let signupRef = firestore().collection('liveRegistrations').doc(data.id);
        signupRef.get().then(function(information){
          if(information.exists){
            that.pendingRegistration.status = true;
            that.pendingRegistration.data = information.data();
          }
        });
      }else{
        that.pendingRegistration.status = false;
      }
    });
  }
}
