import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebProductComponent } from './web-product.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebProductComponent],
  exports: [WebProductComponent],
})
export class WebProductModule {}
