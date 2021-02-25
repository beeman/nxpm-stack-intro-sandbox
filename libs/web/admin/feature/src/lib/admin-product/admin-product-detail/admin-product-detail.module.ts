import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@sandbox/web/ui/button'
import { WebUiPageHeaderModule } from '@sandbox/web/ui/page-header'

import { AdminProductDetailComponent } from './admin-product-detail.component'

@NgModule({
  declarations: [AdminProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminProductDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminProductDetailModule {}
