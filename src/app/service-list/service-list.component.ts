import { Component, OnInit } from '@angular/core';

import { servicos } from '../servicos';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  servicos = servicos;
  
  constructor() { }

  ngOnInit() {
  }

}