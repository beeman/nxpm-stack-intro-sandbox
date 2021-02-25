import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@sandbox/api/core/data-access'

import { ApiProductDataAccessService } from './api-product-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiProductDataAccessService],
  exports: [ApiProductDataAccessService],
})
export class ApiProductDataAccessModule {}
