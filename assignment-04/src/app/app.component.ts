import { Component, Directive, ViewChild } from '@angular/core';

import {AngularFormComponent} from './angular-form/angular-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Directives: [AngularFormComponent]
})
export class AppComponent {
  @ViewChild(AngularFormComponent ) child: AngularFormComponent ; 
  title = 'my-app';
  product_arr = [];

  addValue(val) {
    console.log('Parent component', val);
    this.product_arr.push(val);
  }
}


