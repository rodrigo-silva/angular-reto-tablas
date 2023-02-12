import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css'],
})
export class TablasComponent implements OnInit {
  private paresImpares: number;

  @ViewChild('respuesta') respuestaElement: ElementRef;

  a: number;
  b: number;
  c: number;
  escondidoIndex: number;
  correcta: number;

  respuesta: number;

  constructor() {
    this.paresImpares = new Date().getDay() % 2;
  }

  ngOnInit() {
    this.resetNumbers();

    if (this.escondidoIndex === 0) {
      this.correcta = this.a;
    } else if (this.escondidoIndex === 1) {
      this.correcta = this.b;
    } else {
      this.correcta = this.c;
    }
  }

  dameOtra() {
    this.respuesta = undefined;
    this.resetNumbers();
  }

  private resetNumbers() {
    this.respuestaElement.nativeElement.focus();
    this.escondidoIndex = Math.floor(3 * Math.random());
    this.a = (Math.floor(4 * Math.random()) + 1) * 2 + this.paresImpares;
    this.b = Math.floor(9 * Math.random()) + 2;
    this.c = this.a * this.b;
  }
}
