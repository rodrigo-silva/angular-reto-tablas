import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppModule],
  template: `
    <app-tablas></app-tablas>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
