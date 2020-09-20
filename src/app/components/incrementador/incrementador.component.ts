import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ɵConsole } from '@angular/core';
@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

// tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string;
  @Input() progreso: number;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.progreso = 50;
    this.leyenda = 'Leyenda';
   }

  ngOnInit() {
  }

  onChange(newValue: number) {
    // const elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log(this.txtProgress);

    if (newValue >= 100) {
      this.progreso = 100;
    } else if ( newValue <= 0 ){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );
  }


  cambiarValor(valor) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();
 }

}
