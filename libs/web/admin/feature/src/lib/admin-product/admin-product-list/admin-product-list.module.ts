import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@sandbox/web/ui/page-header'

import { AdminProductListComponent } from './admin-product-list.component'

@NgModule({
  declarations: [AdminProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminProductListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminProductListModule {}
