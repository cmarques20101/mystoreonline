import { Component } from '@angular/core';

import { servicos } from '../servicos';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css']
})
export class ServicoListComponent {
  servicos = servicos;
  
  constructor() { }


}