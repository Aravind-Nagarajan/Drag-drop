import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './main/card/card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddCardComponent } from './main/add-card/add-card.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { MatDialog} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AddCardComponent,
    // MatDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule
    // MatDialog
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
