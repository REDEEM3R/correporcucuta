import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-run5k',
  templateUrl: './run5k.component.html',
  styleUrls: ['./run5k.component.scss']
})
export class Run5kComponent implements OnInit {

  transaction: any;

  constructor() { }

  ngOnInit() {
    this.transaction = {
     merchantId: "508029", 
     accountId : "512321",
     description: "Test PAYU",  
     referenceCode: "TestPayU",
     amount : "20000", 
     tax : "0",
     taxReturnBase: "0", 
     currency: "COP",
     signature: "7ee7cf808ce6a39b17481c54f2c57acc",
     test: "1",
     buyerEmail: "test@test.com", 
     buyerFullName: "Test CorrexCucuta", 
     responseUrl: "http://www.test.com/response", 
     confirmationUrl: "http://www.test.com/confirmation", 
     shippingAddress: "Calle La Jeta # 2 - 30",
     shippingCity: "Cucuta",
     shippingCountry: "Colombia" ,
     telephone: "3102717682"
    }
  }

  seeTransaction(transaction){
    let sendToPayu = firebase.functions().httpsCallable('sendMail');
    sendToPayu(JSON.stringify(transaction)).then(function(result) {
      let sanitizedMessage = result;
      console.log(sanitizedMessage.data.body);
    });
  }
  

}
