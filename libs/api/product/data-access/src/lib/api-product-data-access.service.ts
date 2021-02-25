import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@sandbox/api/core/data-access'

import { AdminCreateProductInput } from './dto/admin-create-product.input'
import { AdminListProductInput } from './dto/admin-list-product.input'
import { AdminUpdateProductInput } from './dto/admin-update-product.input'

@Injectable()
export class ApiProductDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminProducts(adminId: string, input?: AdminListProductInput) {
    return this.data.product.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountProducts(adminId: string, input?: AdminListProductInput): Promise<CorePaging> {
    const total = await this.data.product.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  adminProduct(adminId: string, productId) {
    return this.data.product.findUnique({ where: { id: productId } })
  }

  adminCreateProduct(adminId: string, input: AdminCreateProductInput) {
    return this.data.product.create({
      data: { name: input.name },
    })
  }

  adminUpdateProduct(adminId: string, productId, input: AdminUpdateProductInput) {
    return this.data.product.update({
      where: { id: productId },
      data: { name: input.name },
    })
  }

  adminDeleteProduct(adminId: string, productId) {
    return this.data.product.delete({ where: { id: productId } })
  }
}
