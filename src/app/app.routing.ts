import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {CategoryComponent} from "./category/category.component";
import {AddCotegoryComponent} from "./category/add-cotegory/add-cotegory.component";
import {ManageCategoryComponent} from "./category/manage-category/manage-category.component";
import {LoginComponent} from "./login/login.component";

export const AppRoutes: Routes = [{
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    }
  ]
}, {
  path: 'dashboard',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
      path: 'category',
      component: CategoryComponent,
      children: [
        {
          path: 'index',
          component: ManageCategoryComponent,
        },
        {
          path: 'add',
          component: AddCotegoryComponent,
        },
        {
          path: 'edit/:id',
          component: AddCotegoryComponent,
        }
      ]
    }, {
      path: 'usergroup',
      loadChildren: './components/advance/advance.module#AdvanceModule'
    }, {
      path: 'forms',
      loadChildren: './components/forms/forms.module#FormsModule'
    }, {
      path: 'bootstrap-table',
      loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
    }, {
      path: 'map',
      loadChildren: './map/map.module#MapModule',
    }, {
      path: 'simple-page',
      loadChildren: './simple-page/simple-page.module#SimplePageModule'
    }
  ]
}, {
  path: '**',
  redirectTo: 'error/404'
}];
