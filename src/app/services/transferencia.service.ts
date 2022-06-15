import { Transferencia } from './../model/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url: string = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
   }

   get listaTransferencias(): any[] {
      return this.listaTransferencia;
    }

    listarTodas(): Observable<Transferencia[]>{
      return this.httpClient.get<Transferencia[]>(this.url);
    }

    adicionar(transferencia: any): Observable<Transferencia> {
      this.hidratar(transferencia);

      return this.httpClient.post<Transferencia>(this.url, transferencia)
    }

    hidratar(transferencia: any): any{
       transferencia.data =  new Date();
       return transferencia;
    }


}
