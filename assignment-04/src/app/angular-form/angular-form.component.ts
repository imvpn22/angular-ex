import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, RequiredValidator, Form } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css'],
})
export class AngularFormComponent implements OnInit {

  // @Output() onDataEntry: EventEmitter<any> = new EventEmitter<any>();
  // @Input() product_arr: Array<any>;
  product_arr = [];
  productForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private appService: AppService,

  ) {
    this.productForm = fb.group({
      productName: [null],
      quantity: [null],
    });
   }

  ngOnInit() {
    this.appService.addFormData({product_arr: this.product_arr}).subscribe(data => {
      console.log(data.json());
      this.product_arr = data.json();
    });
  }

  addProduct(productForm) {
    console.log(productForm.value);
    // this.onDataEntry.emit(productForm.value);
    this.product_arr.push(productForm.value)
    
    this.productForm.reset();

  }
  


}
