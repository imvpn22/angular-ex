import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatRadioModule, MatCheckboxModule, MatTableModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AngularFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,  
    MatTableModule,
    MatExpansionModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  exports: [
    AngularFormComponent 
  ]
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
