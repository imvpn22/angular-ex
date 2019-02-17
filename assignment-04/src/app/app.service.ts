import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
// const appPath = environment.appPath ;

@Injectable()
export class AppService {

//   appPath = environment.appPath ;
  authToken: any;
  userID: string;

  constructor(
    private http: Http ,
  ) { }

  addFormData(data) {

    console.log('service data :::' , data);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/formData',{headers: headers} );
    // .map(res => res.json());
  }

//   getacquisitionFormData(ipin, orderid, formid) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     console.log('PROJECTID ', ipin);
//     console.log('Order ID', orderid);
//     console.log('FORM ID ', formid);
//     return this.http
//     .post(appPath + '/forms/acquisition/getacquisitionFormData?ipin=' + ipin + '&orderid=' + orderid + '&formid=' + formid, {
//      headers : headers
//       })
//     .map(res => res.json());
//     }

}
