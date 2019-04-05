import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from "./material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';

import { ExpansionComponent } from './content/expansion/expansion.component';
import { TableComponent } from './content/table/table.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { MenuComponent } from './content/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { SidenavLinksComponent } from './content/sidenav-links/sidenav-links.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import { Page2Component } from './content/page2/page2.component';
import { Page3Component } from './content/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpansionComponent,
    TableComponent,
    WelcomeComponent,
    MenuComponent,
    SidenavLinksComponent,
    MainContentComponent,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
