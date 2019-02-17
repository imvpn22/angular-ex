import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, RequiredValidator, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  myform: FormGroup;
  slides: FormGroup;
  elements: FormGroup;
  options: FormGroup;
  dateOptions: FormGroup;
  form_arr = [];
  slide_arr = [];
  element_arr = [];

  constructor(
    private fb: FormBuilder
  ) { 
    this.myform = fb.group({
      //code: [null, Validators.required],
      title: [null, Validators.required],
    });
    this.slides = fb.group({
      questiontext: [null, Validators.required],
      isSkippingAllowed: [false, Validators.compose([])],
      isAutoSkipped: [false, Validators.compose([])]
    });
    this.elements = this.fb.group({
      isRequired: [false, ],
      elementType: [null, ],
      validationRule: [null, ],
      isMultiSelectAllowed: [false, ],
      options: this.fb.group({
          value: [null, ],
          label: [null, ],
          image: [null,],
          image_alt_text: [null,],
          isImageAvailable: [false,],
          isOptionMainOption: [false, ],
      }), 
      textLabel: [null, ],
      textElementName: [null, ],
      textPlaceholder: [null,],
      textIcon: [null, ],
      defaultValue: [null, ],
      dateOptions: this.fb.group({
          rule: [null,],
          //checkbox: [false, ]
          })
});
    // this.slides = fb.group({
    //   questiontext: [null, Validators.required],
    //   isSkippingAllowed: [null, Validators.compose([])],
    //   isAutoSkipped: [null, Validators.compose([])],
    // });
  }

  ngOnInit() {
  }

  //Generate the JSON object 
  adddetails(form, slid, elem) {
    //console.log(form.value);
      let form1 = form.value;
      
        form1.slides = this.slide_arr;
        //form1.slides.elements = elem.value;
        // if(this.slide_arr.length != 0) {
        //   form1.slides = this.slide_arr;
        //   //this.slide_arr = [];
        // }
        this.form_arr.push(form1);
        console.log(form1);
        form.reset();
     
      // form1.slides = this.slide_arr;
      // console.log(form1);
    // form.value.slides = this.slide_arr;
    // if(form.valid) {
    //   console.log('form is valid');
    // } else {
    //   console.log('Form is invalid');
    // }
  }

  // Add data of element block to elements array.
  add_elements(elem, indx ) { 

    const element = elem.value;
    this.slide_arr[indx].elements.push(element);
    console.log( this.slide_arr);
    elem.reset();
  }

  // add slides block data to array and combine element block to slides
  add_slides(slid, elem) {
    let slide = slid.value;
    //this.element_arr.push(elem.value);
    slide.elements = [];
    // if(this.element_arr.length != 0) {
    //   slide.elements = this.element_arr;
    // }
    this.slide_arr.push(slide);
    //this.element_arr = [];
    slid.reset();
    console.log( this.slide_arr);
  }
  deleteElement(indx, indx1) {
    this.slide_arr[indx].elements.splice(indx1, 1);
  }
  deleteSlide(indx) {
    this.slide_arr.splice(indx, 1);
  }
  deleteElement_fromslide(indx_slide, indx_elem) {
    this.slide_arr[indx_slide].elements.splice(indx_elem, 1);
  }
  reset_form() {
    this.myform.reset();
    this.slides.reset();
    this.elements.reset();
    this.element_arr = [];
    this.slide_arr = [];
    this.form_arr = [];
  }

}
