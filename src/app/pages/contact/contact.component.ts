import { MessagesService } from './../../shared/services/http/contact/messages.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageAfterSubmit:string;
  constructor(private http:MessagesService) { }

  ngOnInit(): void {
  }
  contact(contactForm:NgForm){
      this.messageAfterSubmit="Your message was sent, we will contact you soon";
      
      let newContact = {
        first_name: contactForm.value.firstName,
        last_name: contactForm.value.lastName,
        email: contactForm.value.email,
        message: contactForm.value.message,        
      }
      this.http.createMessage(newContact).subscribe(data=>{
        // console.log(data);
      });
      contactForm.reset();
  }

  closeAlert(){
    this.messageAfterSubmit="";
  }
}
