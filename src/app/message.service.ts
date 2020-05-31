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
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}