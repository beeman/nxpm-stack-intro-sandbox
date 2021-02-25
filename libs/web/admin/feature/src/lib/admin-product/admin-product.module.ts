import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('./admin-product-list/admin-product-list.module').then((m) => m.AdminProductListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./admin-product-create/admin-product-create.module').then((m) => m.AdminProductCreateModule),
      },
      {
        path: ':productId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./admin-product-detail/admin-product-detail.module').then((m) => m.AdminProductDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
              import('./admin-product-edit/admin-product-edit.module').then((m) => m.AdminProductEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminProductModule {}
