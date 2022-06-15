import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alura-bytebank';
  transferencias: any[] = [];

  transfer($event){
    this.transferencias.push({...$event, data: new Date()});
  }
}
