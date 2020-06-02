import { Component, OnInit  } from '@angular/core';
import { Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, of } from 'rxjs';

import { Servico } from '../servico';
import { ServicoService } from '../servico.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css']
})
export class ServicoListComponent implements OnInit {
  //selectedServico: Servico;
  //servicos = servicos;
  servicos: Servico[];
  
  constructor(
    private route: ActivatedRoute,
    //private servicoService: ServicoService,
    private location: Location
    ,private ServicoService: ServicoService
    //, private messageService: MessageService
    ) { }

  //ngOnInit() {
    //servicox = {}; //{id:0, name:'', price:0, description: '.'}
  //}
  ngOnInit() {
    this.getServicos();
  }
  
  /*
  onSelect(servico: Servico): void {
    this.selectedServico = servico;
    this.messageService.add(`ServicoService: Selected service id=${servico.id}!`);
  }
  */

  getServicos(): void {
    //this.servicos = this.ServicoService.getServicos();
    this.ServicoService.getServicos()
      .subscribe(servicos => this.servicos = servicos);
  }
  
  /*
  getServicosCount(term: string): number {
    this.ServicoService.getServicosCount(term)
      .subscribe(servicos => this.servicos = servicos);

  }
  
}