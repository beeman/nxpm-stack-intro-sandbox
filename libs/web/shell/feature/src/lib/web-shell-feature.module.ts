import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WebAuthDataAccessModule, IsLoggedInGuard } from '@sandbox/web/auth/data-access'
import { WebLayoutComponent } from '@sandbox/web/layout'

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      // Application routes here
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'about',
        loadChildren: () => import('@sandbox/web/about/feature').then((m) => m.WebAboutFeatureModule),
      },
      {
        path: 'account',
        loadChildren: () => import('@sandbox/web/account/feature').then((m) => m.WebAccountFeatureModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('@sandbox/web/admin/feature').then((m) => m.WebAdminFeatureModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@sandbox/web/dashboard/feature').then((m) => m.WebDashboardFeatureModule),
      },
      {
        path: 'not-found',
        loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('@sandbox/web/auth/feature').then((m) => m.WebAuthFeatureModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
    WebAuthDataAccessModule,
  ],
})
export class WebShellFeatureModule {}
