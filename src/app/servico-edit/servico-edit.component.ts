import { Component, OnInit } from '@angular/core';
import { Servico } from '../servico';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {
  servico: Servico = {
    id: 1,
    name: 'IE - Consultadoria'
  };

  constructor() { }

  ngOnInit() {
  }

}