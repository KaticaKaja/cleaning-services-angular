import { MessagesService } from './../../shared/services/http/contact/messages.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageAfterSubmit:string;
  private sub:Subscription;
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
      this.sub = this.http.createMessage(newContact).subscribe(data=>{
        // console.log(data);
      });
      contactForm.reset();
  }

  closeAlert(){
    this.messageAfterSubmit="";
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
