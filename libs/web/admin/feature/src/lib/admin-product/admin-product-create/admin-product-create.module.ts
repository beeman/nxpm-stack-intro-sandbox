import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@sandbox/web/ui/button'
import { WebUiFormModule } from '@sandbox/web/ui/form'
import { WebUiPageHeaderModule } from '@sandbox/web/ui/page-header'

import { AdminProductCreateComponent } from './admin-product-create.component'

@NgModule({
  declarations: [AdminProductCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminProductCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminProductCreateModule {}
