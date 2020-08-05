// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();

const admi = require('firebase-admin');

const request = require('request');
admi.initializeApp();

// Automatically allow cross-origin requests
// app.use(cors({ origin: true }));

// app.get('/hello', (req: Request, res: any) => {
//   res.end("Received GET request!");  
// });

// functions.https.onRequest('/hello', (req: Request, res: any) => {
//   // res.end("Received POST request!");  
//   return res.status(200).send({"Received POST request!"});
// });



exports.sendMail = functions.https.onRequest((req: Request, res: any) => {
  cors(req, res, () => {
    
    // let form = '';
    if(req.body){
      // data = { request : JSON.stringify(req.body), code : 'OK - DATA'};
      let clientServerOptions = {
        uri: 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/',
        body: {
          'merchantId': "508029", 
          'accountId' : "512321",
          'description': "Test PAYU",  
          'referenceCode': "TestPayU",
          'amount' : "20000", 
          'tax' : "0",
          'taxReturnBase': "0", 
          'currency': "COP",
          'signature': "7ee7cf808ce6a39b17481c54f2c57acc",
          'test': "1",
          'buyerEmail': "test@test.com", 
          'buyerFullName': "Test CorrexCucuta", 
          'responseUrl': "http://www.test.com/response", 
          'confirmationUrl': "http://www.test.com/confirmation", 
          'shippingAddress': "Calle La Jeta # 2 - 30",
          'shippingCity': "Cucuta",
          'shippingCountry': "Colombia" ,
          'telephone': "3102717682"
        },
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
      }
      request(clientServerOptions, function (error: Error, response: Response) {
          
          res.header('Content-Type','application/json');
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', 'Content-Type');
          return res.status(200).send({data: response});
      });
    }

    // res.set('Access-Control-Allow-Origin', '*');
    // const msg = "Received POST request!";
    // return res.status(200).send({data});
  })
});





// Expose Express API as a single Cloud Function:
// exports.widgets = functions.https.onRequest(app);

