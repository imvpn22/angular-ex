import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-component',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})

export class ProductComponent implements OnInit {

  @Output() onDataEntry: EventEmitter<any> = new EventEmitter<any>();
  @Input() product_arr: Array<any>;
  @Input() recentProduct: String;

  @ViewChild('fr') productFom: NgForm;

  model: any = {};

  constructor() {}

  ngOnInit() {
    // console.log(this.recentProduct);
  }

  onSubmit() {
    console.log(this.model);
    this.onDataEntry.emit({ ...this.model });

    // Clear
    this.productFom.resetForm();
  }
}
