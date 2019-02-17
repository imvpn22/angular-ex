import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, RequiredValidator, Form } from '@angular/forms';

@Component({
  selector: 'app-product-component',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})

export class ProductComponent implements OnInit {

  @Output() onDataEntry: EventEmitter<any> = new EventEmitter<any>();
  @Input() product_arr: Array<any>;
  @Input() recentProduct: String;
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.productForm = fb.group({
      name: [null],
      quantity: [null],
    });
   }

  ngOnInit() {
    // console.log(this.recentProduct);
  }

  addProduct(productForm) {
    this.onDataEntry.emit(productForm.value);
    this.productForm.reset();

  }
}
