import { Component, OnInit } from '@angular/core';
import { Servico } from '../servico';
import { servicoService } from '../servico.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  servicos: Servico[] = []; //start empty

  constructor(private servicoService: servicoService) { }

  ngOnInit() {
    this.getServicos();
  }

  getServicos(): void {
    this.servicoService.getServicos()
      .subscribe(servicos => this.servicos = servicos.slice(1, 5));
  }
}
/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
