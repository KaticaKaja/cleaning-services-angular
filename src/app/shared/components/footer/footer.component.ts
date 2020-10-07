import { MessagesService } from './../../services/http/contact/messages.service';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/http/navigation/navigation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  navigation:object;
  messageAfterSubmit:string;
  constructor(private navService:NavigationService, private msgServ: MessagesService) { }
  ngOnInit(): void {
    this.navService.getTypesOfServices().subscribe(data=>this.navigation=data);
  }

  sub(subForm:NgForm){
    this.messageAfterSubmit="Your message was sent, we will contact you soon";
    
    let newSub = {
      email: subForm.value.email       
    }
    if(newSub.email !== "")
    this.msgServ.subscribeList(newSub).subscribe(data=>{
      // console.log(data);
    });
    subForm.reset();
  }
}
