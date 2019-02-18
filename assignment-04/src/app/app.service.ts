import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AppService {
  authToken: any;
  userID: string;

  constructor(
    private http: Http ,
  ) { }

    getProductData = () => {
        return this.http.get('http://localhost:3000/products');
    }

    addNewProduct(data) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/products', data,  {headers: headers} );
    }
}
