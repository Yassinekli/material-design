import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContentComponent } from './content/main-content/main-content.component';
import { Page2Component } from './content/page2/page2.component';
import { Page3Component } from './content/page3/page3.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
