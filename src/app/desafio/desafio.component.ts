import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css'],
})
export class DesafioComponent implements OnInit {
  @ViewChild('coso') respuestaElement: ElementRef;
  a: number;
  b: number;
  c: number;
  escondidoIndex: number;
  correcta: number;
  respuesta: number;
  mensaje: string;
  contestadasBien: number;

  private esNueva: boolean;
  private paresImpares: number;
  private estaBien = [
    'Bien ahi!',
    'Te felicito',
    'Venis bien',
    'Adivinaste? jajajaja',
    'Segui asi',
    'Vamos Cachorro!',
  ];
  private estaMal = [
    'No',
    'Pensalo bien',
    'No adivines',
    'Dale que esta la sabes',
    'Despues jugas a la play',
    'Como el orto...',
  ];

  constructor() {
    this.paresImpares = new Date().getDay() % 2;
    this.contestadasBien = 0;
  }

  ngOnInit() {
    this.reset();
  }

  dameOtra() {
    this.respuesta = undefined;
    this.mensaje = undefined;
    this.respuestaElement.nativeElement.focus();
    this.reset();
  }

  onKey($event) {
    this.mensaje = undefined;
    if (this.respuesta && this.respuesta == this.correcta) {
      this.mensaje =
        this.estaBien[Math.floor(Math.random() * this.estaBien.length)];
      if (this.esNueva) {
        this.contestadasBien++;
      }
    } else if (this.respuesta) {
      this.esNueva = false;
      this.mensaje =
        this.estaMal[Math.floor(Math.random() * this.estaMal.length)];
    }
  }

  private reset() {
    this.esNueva = true;
    this.resetNumbers();
    this.setCorrecta();
  }

  private resetNumbers() {
    this.escondidoIndex = Math.floor(3 * Math.random());
    this.a = Math.floor(9 * Math.random()) + 1;
    this.b = Math.floor(9 * Math.random()) + 1;
    this.c = this.a * this.b;
  }

  private setCorrecta() {
    if (this.escondidoIndex === 0) {
      this.correcta = this.a;
    } else if (this.escondidoIndex === 1) {
      this.correcta = this.b;
    } else {
      this.correcta = this.c;
    }
  }
}
