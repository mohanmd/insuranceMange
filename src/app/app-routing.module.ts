import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TermsconditionsComponent } from './pages/termsconditions/termsconditions.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CustomerServiceComponent } from './pages/customer-service/customer-service.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'customer_service',
    component: CustomerServiceComponent,
  },
  {
    path: 'termsandconditions',
    component: TermsconditionsComponent,
  },
  {
    path: 'privacy_policy',
    component: PrivacyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
