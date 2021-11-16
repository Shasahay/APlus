import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardDisplayComponent } from './component/card-display/card-display.component';
import {MatCardModule} from '@angular/material/card'

@NgModule({
  declarations: [CardDisplayComponent],
  imports: [
    RouterModule,
    MatCardModule,
    CommonModule
  ],
  exports:[CardDisplayComponent]
})
export class SharedModule { }
