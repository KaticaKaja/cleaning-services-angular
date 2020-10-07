import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageAfterSubmit:string;
  constructor() { }

  ngOnInit(): void {
  }
  contact(contactForm:NgForm){
    console.log(contactForm.value);
      this.messageAfterSubmit="Your message was sent, we will contact you soon";
      contactForm.reset();
  }

  closeAlert(){
    this.messageAfterSubmit="";
  }
}
