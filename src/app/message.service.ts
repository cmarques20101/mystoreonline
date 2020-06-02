import { Injectable } from '@angular/core';

/*
@Injectable()
export class MessageService {

  constructor() { }

}
@Injectable({
  providedIn: 'root',
})
*/
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    //this.messages = [];
    this.messages.push(message);
    if (this.messages.length >3) {
      this.messages = this.message.slice(this.messages.length-1-,this.messages.length-1);
    }

  }

  clear() {
    this.messages = [];
  }
}