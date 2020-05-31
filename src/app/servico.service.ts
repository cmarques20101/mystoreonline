import { Injectable } from '@angular/core';

import { Servico } from './servico';
import { servicos } from './servicos';

@Injectable({
  providedIn: 'root',
})

export class ServicoService {

  constructor() { }

  getServicos(): Servico[] {
    return servicos;
  }


}