import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-par-impar',
  templateUrl: './par-impar.component.html',
  styleUrls: ['./par-impar.component.css']
})
export class ParImparComponent implements OnInit {

  mensaje: string;
  valorInt: number =0;
  @Input() valor: string;
  @Output() parImpar=new EventEmitter<string>();

  constructor() {
    this.mensaje = '';
    this.valor = '';
    //this.valorInt = Number(this.valor);
  }

  ngOnInit(): void {
  }

  calculoParImpar(_valor?:number){
    this.valorInt = Number(this.valor);
    if (_valor) this.valorInt = _valor;
      if (this.valorInt % 2 == 0)
        this.mensaje = 'La suma de las balotas es: '+this.valor+' y es un numero par';
      else
        this.mensaje = 'La suma de las balotas es: '+this.valor+' y es un numero impar';
    this.parImpar.emit(this.mensaje);
  }
}