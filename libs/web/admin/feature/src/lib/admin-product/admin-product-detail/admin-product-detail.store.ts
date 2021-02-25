import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService, Product } from '@sandbox/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface ProductDetailState {
  errors?: any
  loading?: boolean
  item?: Product
}

@Injectable()
export class AdminProductDetailStore extends ComponentStore<ProductDetailState> {
  constructor(private readonly data: WebCoreDataAccessService, route: ActivatedRoute) {
    super({ loading: false })
    this.loadProductEffect(route.params.pipe(pluck('productId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadProductEffect = this.effect<string>((productId$) =>
    productId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((productId) =>
        this.data.adminProduct({ productId }).pipe(
          tapResponse(
            (res) => this.patchState({ item: res.data.item, errors: res.errors, loading: false }),
            (errors: any) =>
              this.patchState({
                loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )
}
