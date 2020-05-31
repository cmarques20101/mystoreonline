import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Servico } from './servico';
import { servicos } from './servicos';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})

export class ServicoService {

  constructor(private messageService: MessageService) { }

  /*
  getServicos(): Servico[] {
    return servicos;
  }
  */
  getServicos(): Observable<Servico[]> {
    this.messageService.add('ServicoService: fetched servicos all!');
    return of(servicos);
  }

  getServico(id: number): Observable<Servico> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`ServicoService: fetched servico id=${id}!`);
    return of(servicos.find(servico => servico.id === id));
  }

}