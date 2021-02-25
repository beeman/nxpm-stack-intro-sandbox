import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateProductInput,
  AdminListProductInput,
  AdminUpdateProductInput,
  ApiProductDataAccessService,
  Product,
} from '@sandbox/api/product/data-access'
import { CorePaging } from '@sandbox/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@sandbox/api/auth/util'
import { User } from '@sandbox/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiProductFeatureAdminResolver {
  constructor(private readonly service: ApiProductDataAccessService) {}

  @Query(() => [Product], { nullable: true })
  adminProducts(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListProductInput, nullable: true }) input?: AdminListProductInput,
  ) {
    return this.service.adminProducts(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountProducts(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListProductInput, nullable: true }) input?: AdminListProductInput,
  ) {
    return this.service.adminCountProducts(admin.id, input)
  }

  @Query(() => Product, { nullable: true })
  adminProduct(@CtxUser() admin: User, @Args('productId') productId: string) {
    return this.service.adminProduct(admin.id, productId)
  }

  @Mutation(() => Product, { nullable: true })
  adminCreateProduct(@CtxUser() admin: User, @Args('input') input: AdminCreateProductInput) {
    return this.service.adminCreateProduct(admin.id, input)
  }

  @Mutation(() => Product, { nullable: true })
  adminUpdateProduct(
    @CtxUser() admin: User,
    @Args('productId') productId: string,
    @Args('input') input: AdminUpdateProductInput,
  ) {
    return this.service.adminUpdateProduct(admin.id, productId, input)
  }

  @Mutation(() => Product, { nullable: true })
  adminDeleteProduct(@CtxUser() admin: User, @Args('productId') productId: string) {
    return this.service.adminDeleteProduct(admin.id, productId)
  }
}
