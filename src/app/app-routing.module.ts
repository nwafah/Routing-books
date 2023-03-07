import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,},
  {
    path:'users',children:[
      {path:'',component:UsersComponent},
      {path:'user-list',component:UsersListComponent},
      {path:'user-details',component:UsersDetailsComponent},
    ],
  },
  {
    path:'auth',children:[
      {path:'',component:AuthenticationComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
    ]
  },
  {
    path:'',redirectTo:'home',pathMatch:'full',
  },
  {
    path:'**',component:NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
