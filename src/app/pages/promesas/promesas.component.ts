import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

   


    this.contarTres().then(
      mensaje => console.log('Termino!', mensaje)
    )
    .catch( err => console.log('Error en la promesa', err));

  }

  ngOnInit() {
  }

  contarTres() {
    let promesa = new Promise( (resolve, reject) => {
      
      let contador = 0;

      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if(contador === 3) {
          resolve('OK!');
          clearInterval(intervalo);
        }
      }, 1000);

    });

    return promesa;
  }

}
