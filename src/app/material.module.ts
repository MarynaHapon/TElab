import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule
  ],
})
export class MaterialModule { }
