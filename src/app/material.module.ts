import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule
  ],
})
export class MaterialModule { }
