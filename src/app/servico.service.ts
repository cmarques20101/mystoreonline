import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Servico } from './servico';
import { servicos } from './servicos';
import { MessageService } from './message.service';
import { QUOTED_KEYS } from '@angular/compiler/src/output/value_util';

@Injectable({
  providedIn: 'root',
})

export class ServicoService {

  constructor(private messageService: MessageService) { }

  log(message: string) {
    this.messageService.add(`ServicoService: ${message}`);
  }

  /*
  getServicos(): Servico[] {
    return servicos;
  }
  */
  getServicos(): Observable<Servico[]> {
    this.messageService.add('ServicoService: fetched servicos all!');
    return of(servicos);
  }
  getServicosCount(term: string): number {
    let qtd: number = 0;
    const source = of(servicos);
    const myqtd = source.subscribe(val => qtd = val.length);
    
    this.messageService.add('ServicoService: fetched servicos Count '+qtd+'!');
    return qtd;
  }
  /*
    searchHeroesCount(term: string): number {
      let c = 0;
      this.log(`searchHeroesCount: !`);
      //let heroes =  searchHeroes(term);
      const subscribe =  this.searchHeroes(term).subscribe(val => c = val.length );
      //const subscribe =  this.heroes$.subscribe(val => this.searchTermsCount = val.length );
      this.log('searchHeroesCount: #'+c+'!');
    return c;
    }

  */

  getServico(id: number): Observable<Servico> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`ServicoService: fetched servico id=${id}!`);
    return of(servicos.find(servico => servico.id === id));
  }

}