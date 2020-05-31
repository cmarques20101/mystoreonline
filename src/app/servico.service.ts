import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Servico } from './servico';
import { servicos } from './servicos';

@Injectable({
  providedIn: 'root',
})

export class ServicoService {

  constructor() { }

  /*
  getServicos(): Servico[] {
    return servicos;
  }
  */
getServicos(): Observable<Servico[]> {
  return of(servicos);
}


}