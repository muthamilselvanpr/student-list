import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentsService } from './student/students.service';
import { HttpClientModule } from '@angular/common/http';
import * as StudentReducer from './state/student.reducer'
import {StudentEffects } from './state/student.effects'

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({studentState: StudentReducer.studentReducer}),
    EffectsModule.forRoot([StudentEffects])
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
