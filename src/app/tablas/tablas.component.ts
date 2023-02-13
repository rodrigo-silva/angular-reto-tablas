import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css'],
})
export class TablasComponent implements OnInit {
  @Input() tablas: Array<number>;
  respuestas: Map<number, any>;

  ngOnInit(): void {
    this.respuestas = new Map();
    this.respuestas.set(this.tablas[0], []);
    this.respuestas.set(this.tablas[1], []);
  }

  unaRespuesta(tabla, numero, $event) {
    this.respuestas.get(tabla)[numero] = $event.target.value;
    console.log(this.respuestas.get(tabla));
  }
}
