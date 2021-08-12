import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import { MatTabsModule } from '@angular/material/tabs'; 
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatExpansionModule} from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewbookingComponent } from './newbooking/newbooking.component'; 
import { TrainlistComponent } from './trainlist/trainlist.component';
import { PassengersComponent } from './passengers/passengers.component'; 
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { IrctcFeedbackComponent } from './irctc-feedback/irctc-feedback.component'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input'; 
import {MatNativeDateModule} from '@angular/material/core'; 
import { MatTableModule } from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';



@NgModule({ 
declarations: [
  AppComponent,
  NewbookingComponent,
  TrainlistComponent,
  PassengersComponent,
  MakepaymentComponent,
  IrctcFeedbackComponent,

],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
