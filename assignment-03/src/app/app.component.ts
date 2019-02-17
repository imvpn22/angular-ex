import { Component, Directive, ViewChild } from '@angular/core';

import { ProductComponent } from './Product/Product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Directives: [ProductComponent]
})
export class AppComponent {
  @ViewChild(ProductComponent ) child: ProductComponent ;
  title = 'Assignment-03';
  product_arr = [{
    'id': 1,
    'name': 'iPhone 6',
    'quantity': 100
  }, {
    'id': 3,
    'name': 'Onle Plus 6T',
    'quantity': 109283
  }];

  addValue(val) {
    console.log('Parent component', val);
    this.product_arr.push(val);
  }
}


