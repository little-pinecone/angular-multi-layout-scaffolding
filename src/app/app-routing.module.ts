import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { GuestLayoutComponent } from './layout/guest/guest-layout/guest-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent, pathMatch: 'full'},
    ]
  },
  {
    path: '',
    component: AuthorisedLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
