import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, RequiredValidator, Form } from '@angular/forms';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {

  product_arr = [];
  productForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.productForm = fb.group({
      productName: [null],
      quantity: [null],
    });
   }

  ngOnInit() {
  }

  addProduct(productForm) {
    console.log(productForm.value);
    this.product_arr.push(productForm.value)
    this.productForm.reset();

  }
  


}
