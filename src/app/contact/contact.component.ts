import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm:any = FormGroup;
  constructor(){}

  ngOnInit(): void {
     this.contactForm= new FormGroup({
      'full_name': new FormControl(''),
      'eamil': new FormControl(''),
      'mobile_number': new FormControl(''),
      'subject': new FormControl(''),
      'discription': new FormControl(''),
    })
  }

   onSubmit(){
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

}
