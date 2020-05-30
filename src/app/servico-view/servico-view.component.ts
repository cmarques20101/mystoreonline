import { Component, OnInit } from '@angular/core';
import { Servico } from '../servico';

@Component({
  selector: 'app-servico-view',
  templateUrl: './servico-view.component.html',
  styleUrls: ['./servico-view.component.css']
})
export class ServicoViewComponent implements OnInit {
  title = 'Detalhes';
  servico: Servico = 
  {
    id: 1,
    name: 'IE - Consultadoria'
  };
  constructor() { }

  ngOnInit() {
  }

}