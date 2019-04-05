import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, 
  MatSidenavModule, MatGridListModule,
  MatTableModule, MatCardModule,
  MatExpansionModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatTableModule, MatCardModule, MatExpansionModule, MatInputModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatTableModule, MatCardModule, MatExpansionModule, MatInputModule, MatSidenavModule],
})
export class MaterialModule { }