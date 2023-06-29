import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PortFolioComponent } from './port-folio/port-folio.component';
import { authGuard } from './shared/auth.guard';
import { PortFolioDetailComponent } from './port-folio-detail/port-folio-detail.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [ 
  { path: "", component: AuthComponent } ,
  //{ path: "profil", component: PortFolioComponent } ,
  { path: "signup", component: SignupComponent } ,
  //{ path: "login", component: AuthComponent },
  { path: "detail", component: PortFolioDetailComponent ,canActivate:[authGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
