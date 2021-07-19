import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loteria';

  numeroSeleccionado: number;
  valores=Array();
  suma: number;
  numeroGanador: string;
  mensaje: string;

  constructor(){
    this.suma = 0;
    this.numeroSeleccionado = 0;
    this.numeroGanador = '';
    this.mensaje = '';
    this.valores=[0,0,0,0,0];    
  }

  obtenerNumero(){
    let numero: number;
    numero = (Math.trunc(Math.random() * 9)-1)+(1);
    if (numero < 0) numero = 0;
    return numero;
  }

  jugar():void{
    this.valores=[];
    this.suma = 0;
    this.numeroGanador = 'El numero ganador es:';
    for (let x = 0; x < 5; x++) {
      this.numeroSeleccionado = this.obtenerNumero();
      this.valores.push(this.numeroSeleccionado);
      this.numeroGanador = this.numeroGanador + ' '+this.numeroSeleccionado;
      this.suma = this.suma+this.numeroSeleccionado;
    }
  }

  llamarParImpar(mensaje:any){
    this.mensaje = "Padre: "+mensaje; 
  }
}
