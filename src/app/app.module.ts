import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './tablas/tablas.component';
import { FormsModule } from '@angular/forms';
import { DesafioComponent } from './desafio/desafio.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TablasComponent, DesafioComponent],
  exports: [TablasComponent, DesafioComponent],
})
export class AppModule {}
