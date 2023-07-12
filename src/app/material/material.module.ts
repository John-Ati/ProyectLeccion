import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';







@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  exports:[
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
