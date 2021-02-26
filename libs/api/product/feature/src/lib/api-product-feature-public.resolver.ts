import { Query, Resolver } from '@nestjs/graphql'
import { ApiProductDataAccessService, Product } from '@sandbox/api/product/data-access'

@Resolver()
export class ApiProductFeaturePublicResolver {
  constructor(private readonly service: ApiProductDataAccessService) {}

  @Query(() => [Product], { nullable: true })
  publicProducts() {
    return this.service.publicProducts()
  }
}
