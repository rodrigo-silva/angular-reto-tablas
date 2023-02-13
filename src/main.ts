import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppModule],
  templateUrl: './main.html',
})
export class App implements OnInit {
  tablas: Array<number>;

  ngOnInit(): void {
    this.tablas = [];
    const day = new Date().getDay();
    if (day < 5) {
      this.tablas.push(day * 2);
      this.tablas.push(day * 2 + 1);
    } else {
      this.fillRandom();
    }
  }

  /**
   *
   */
  private fillRandom() {
    this.tablas.push(this.getNumber());
    let proximo = this.getNumber();

    while (this.tablas.find((e) => e === proximo)) {
      proximo = this.getNumber();
    }
    this.tablas.push(proximo);
  }

  /**
   *
   */
  private getNumber() {
    return Math.floor(Math.random() * 8) + 2;
  }
}

bootstrapApplication(App);
