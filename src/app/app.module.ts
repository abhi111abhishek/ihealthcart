import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import {ScrollModule} from './scroll/scroll.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { AddCotegoryComponent } from './category/add-cotegory/add-cotegory.component';
import { ManageCategoryComponent } from './category/manage-category/manage-category.component';
import {CategoryService} from "./category/category.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent,
    LoginComponent,
    CategoryComponent,
    AddCotegoryComponent,
    ManageCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    ScrollModule
  ],
  exports: [ScrollModule],
  providers: [
      { provide: LocationStrategy, useClass: PathLocationStrategy},
      CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
