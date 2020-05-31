import { Component, OnInit  } from '@angular/core';
import { Input } from '@angular/core';

import { Servico } from '../servico';
import { ServicoService } from '../servico.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css']
})
export class ServicoListComponent {
  selectedServico: Servico;
  //servicos = servicos;
  servicos: Servico[];
  
  constructor(private ServicoService: ServicoService
    , private messageService: MessageService
    ) { }

  //ngOnInit() {
    //servicox = {}; //{id:0, name:'', price:0, description: '.'}
  //}
  ngOnInit() {
    this.getServicos();
  }


  onSelect(servico: Servico): void {
    this.selectedServico = servico;
    this.messageService.add(`ServicoService: Selected service id=${servico.id}!`);
  }

  getServicos(): void {
    //this.servicos = this.ServicoService.getServicos();
    this.ServicoService.getServicos()
      .subscribe(servicos => this.servicos = servicos);
  }

}