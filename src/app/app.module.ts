import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TermsconditionsComponent } from './pages/termsconditions/termsconditions.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CustomerServiceComponent } from './pages/customer-service/customer-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TermsconditionsComponent,
    PrivacyComponent,
    AboutusComponent,
    ContactusComponent,
    CustomerServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class AppModule { }
