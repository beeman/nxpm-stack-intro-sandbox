import { Module } from '@nestjs/common'
import { ApiProductDataAccessModule } from '@sandbox/api/product/data-access'

import { ApiProductFeatureAdminResolver } from './api-product-feature-admin.resolver'

@Module({
  imports: [ApiProductDataAccessModule],
  providers: [ApiProductFeatureAdminResolver],
})
export class ApiProductFeatureModule {}
