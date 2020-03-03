import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContrastPointsComponent } from './components/contrast-points/contrast-points.component';

@NgModule({
  declarations: [ContrastPointsComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ContrastPointsComponent,
  ],
})
export class SharedModule { }
