import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import {ProductListingComponent} from './milker/product-listing/product-listing.component';
import {OrdersComponent} from './milker/orders/orders.component';
import{LoginComponent} from './authorization/login/login.component'
import { RegisterComponent } from './authorization/register/register.component';
import {AuthGuard} from './guards/auth.guard'


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate:[AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      },
      { path:'productlisting',
        component: ProductListingComponent,
      },
      {
        path:'orders',
        component : OrdersComponent
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    canActivate:[AuthGuard],
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
