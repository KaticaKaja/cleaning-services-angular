import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarmaincontentService {

  constructor() { }

  private data = new BehaviorSubject<any>("");
  public share = this.data.asObservable();

  communicate(sentData){
    this.data.next(sentData);
  }
}
