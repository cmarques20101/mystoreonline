import { Component, Input } from '@angular/core';

@Component({
  selector: 'hellox',
  templateUrl: './hellox.component.html',
  /*
  template: `<h1>Hello {{nameApp}}!</h1><hr/><address>
  <a href="mailto:cmarques20101@hotmail.com">email</a>
</address><hr/>`,
*/
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloxComponent  {
  @Input() nameApp: string;
}
//Copy from: ?

/* OLD:
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hellox',
  templateUrl: './hellox.component.html',
  styleUrls: ['./hellox.component.css']
})
export class HelloxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/