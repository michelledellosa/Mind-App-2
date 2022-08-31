// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = { 
  account: "https://unipedidos.azurewebsites.net/",
//API_KEY_GOOGLE_MAPS: "AIzaSyBXacUor2PuGqwh7gJeiH7JzI0DXPD0HII",
  API_KEY_GOOGLE_MAPS:"AIzaSyDU_9fU6OTjJbPqSRxWxZzo6uh3hgz461o",
  API:"https://neuron-red-post-api.azurewebsites.net",
  production: true,  
  functions: "",
  productDetails: "https://unipedidos.azurewebsites.net/shoppingorders/",
  token_test:"'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMDEyMzQwMjIwIiwiaWF0IjoxNjU4OTI3MDk5fQ.sMAeTi21RqfHKJEfVVq6Mb2qMeZXXt3K6-j1jJ-cNYA'",

  firebaseConfig: {
    apiKey: "AIzaSyA6YohTe0ajX9q_oaQvfeqv1HihD3m0lGQ",
    authDomain: "mind-club-5f67e.firebaseapp.com",
    projectId: "mind-club-5f67e",
    storageBucket: "mind-club-5f67e.appspot.com",
    messagingSenderId: "378025529244",
    appId: "1:378025529244:web:983c7f092dff9963390259",
    measurementId: "G-20ENT0ZV7N"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
