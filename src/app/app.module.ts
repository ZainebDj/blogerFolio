import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortFolioComponent } from './port-folio/port-folio.component';
import { PortFolioDetailComponent } from './port-folio-detail/port-folio-detail.component';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { FooterComponent } from './navbar/footer/footer.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    PortFolioComponent,
    PortFolioDetailComponent,
    NavBarComponent,
    FooterComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
