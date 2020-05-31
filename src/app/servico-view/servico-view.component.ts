import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ServicoService }  from '../servico.service';

import { Servico } from '../servico';

@Component({
  selector: 'app-servico-view',
  templateUrl: './servico-view.component.html',
  styleUrls: ['./servico-view.component.css']
})
export class ServicoViewComponent implements OnInit {
  title = 'Detalhes';
  servico: Servico;
  /* 
  {
    id: 1,
    name: 'IE - Consultadoria'
  };
  */
  
  constructor(
    private route: ActivatedRoute,
    private servicoService: ServicoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getServico();
  }

  getServico(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.servicoService.getServico(id)
      .subscribe(servico => this.servico = servico);
  }
}