import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@sandbox/web/ui/page'

import { WebProductFeatureComponent } from './web-product-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebProductFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebProductFeatureComponent],
})
export class WebProductFeatureModule {}
