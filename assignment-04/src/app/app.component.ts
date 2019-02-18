import { Component, Directive, ViewChild, OnInit } from '@angular/core';

import { ProductComponent } from './Product/Product.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(ProductComponent ) child: ProductComponent ;
  title = 'Assignment-04';
  productArr = [];
  recentProduct = {};

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getProductData().subscribe(data => {
      this.productArr = data.json()
    });
  }

  addValue(val) {
    console.log('Parent component', val);
    this.recentProduct = val;
    this.productArr.push(val);
    this.appService.addNewProduct(val).subscribe(res => {
      if (res.statusText === 'Created') {
        console.log('Success addeding Product');
      } else {
        console.log('Error adding Product');
      }
    });
  }
}
