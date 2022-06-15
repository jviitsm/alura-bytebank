import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
   }

   get listaTransferencias(): any[] {
      return this.listaTransferencia;
    }

    adicionar(transferencia: any): void {
      this.listaTransferencias.push(this.hidratar(transferencia));
    }

    hidratar(transferencia: any): any{
       transferencia.data =  new Date();
       return transferencia;
    }

}
