import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCiudadesComponent } from './pages/admin/view-ciudades/view-ciudades.component';
import { AddCiudadesComponent } from './pages/admin/add-ciudades/add-ciudades.component';
import { ActualizarVuelosComponent } from './pages/admin/actualizar-vuelos/actualizar-vuelos.component';
import { AddProductosComponent } from './pages/admin/add-productos/add-productos.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path : '',
        component : WelcomeComponent
      },
      {
        path : 'ciudad',
        component : ViewCiudadesComponent
      },
      {
        path : 'add-ciudad',
        component : AddCiudadesComponent
      },
      {
        path:'ciudad/:ciudadId',
        component:ActualizarVuelosComponent
      },
      {
        path : 'producto',
        component : WelcomeComponent
      },
      {
        path : 'add-producto',
        component : AddProductosComponent
      },
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
