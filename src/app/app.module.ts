import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { AlertService, AuthenticationService, UserService } from './service/index';
import { HttpClientModule, } from '@angular/common/http'


// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { OrdersComponent } from './milker/orders/orders.component';
import { ProductListingComponent } from './milker/product-listing/product-listing.component';
import { ModalModule } from 'ngx-bootstrap';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';
import {AuthGuard} from './guards'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    // ImageCropperModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    OrdersComponent,
    ProductListingComponent,
    LoginComponent,
    RegisterComponent,

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
    AlertService,
    AuthenticationService,
    UserService,
    AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
