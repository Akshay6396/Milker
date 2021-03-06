import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule, } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { AlertService, AuthenticationService, UserService, PagerService } from './service/index';
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
import { AuthGuard } from './guards'
import { SearchPipe } from './pipe/search.pipe';
import { ForgotComponent } from './authorization/forgot/forgot.component';
import { HttpModule } from '@angular/http';
import { NgxLoadingModule } from 'ngx-loading';

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
    CommonModule,
    HttpModule,
    NgxLoadingModule.forRoot({})
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
    SearchPipe,
    ForgotComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
    AlertService,
    AuthenticationService,
    UserService,
    AuthGuard,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// testing