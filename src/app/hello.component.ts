import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{nameApp}}!</h1><hr/><address>
  <a href="mailto:cmarques20101@hotmail.com">email</a>
</address><hr/>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() nameApp: string;
}
//Copy from: ?