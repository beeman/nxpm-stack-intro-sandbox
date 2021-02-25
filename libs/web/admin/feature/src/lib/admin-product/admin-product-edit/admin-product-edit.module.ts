import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@sandbox/web/ui/button'
import { WebUiFormModule } from '@sandbox/web/ui/form'
import { WebUiPageHeaderModule } from '@sandbox/web/ui/page-header'

import { AdminProductEditComponent } from './admin-product-edit.component'

@NgModule({
  declarations: [AdminProductEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminProductEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminProductEditModule {}
