import { Component, OnInit } from '@angular/core';
import { Servico } from '../servico';

@Component({
  selector: 'app-servico-edit',
  templateUrl: './servico-edit.component.html',
  styleUrls: ['./servico-edit.component.css']
})
export class ServicoEditComponent implements OnInit {
  title = 'Detalhes';
  servico: Servico = {
    id: 1,
    name: 'IE - Consultadoria'
  };

  constructor() { }

  ngOnInit() {
  }

}