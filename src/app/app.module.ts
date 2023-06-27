import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortFolioComponent } from './port-folio/port-folio.component';
import { PortFolioDetailComponent } from './port-folio-detail/port-folio-detail.component';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { FooterComponent } from './navbar/footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
//Module
import {MatGridListModule} from '@angular/material/grid-list';
import { ToastrModule } from 'ngx-toastr';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"
import {MatSelectModule} from "@angular/material/select"
import {MatCheckboxModule} from "@angular/material/checkbox"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    AppComponent,
    PortFolioComponent,
    PortFolioDetailComponent,
    NavBarComponent,
    FooterComponent,
    AuthComponent,
    HomeComponent,
    SignupComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
