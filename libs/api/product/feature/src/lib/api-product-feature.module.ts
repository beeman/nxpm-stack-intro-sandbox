import { Module } from '@nestjs/common'
import { ApiProductDataAccessModule } from '@sandbox/api/product/data-access'

import { ApiProductFeatureAdminResolver } from './api-product-feature-admin.resolver'
import { ApiProductFeaturePublicResolver } from './api-product-feature-public.resolver'

@Module({
  imports: [ApiProductDataAccessModule],
  providers: [ApiProductFeatureAdminResolver, ApiProductFeaturePublicResolver],
})
export class ApiProductFeatureModule {}
