import { MessagesService } from './../../services/http/contact/messages.service';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/http/navigation/navigation.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  navigation:object;
  messageAfterSubmit:string;
  private subscription:Subscription;
  constructor(private navService:NavigationService, private msgServ: MessagesService) { }
  ngOnInit(): void {
    this.subscription = this.navService.getTypesOfServices().subscribe(data=>this.navigation=data);
  }

  sub(subForm:NgForm){
    let newSub = {
      email: subForm.value.email       
    }
    if(newSub.email == null){
      // console.log('polje je null')
    }else if(newSub.email === ''){
      // console.log('polje je prazno');
    }else{
    this.messageAfterSubmit="Thank you for subscribing";
    this.msgServ.subscribeList(newSub).subscribe(data=>{
      // console.log(data);
    });
    }
    
    subForm.reset();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
