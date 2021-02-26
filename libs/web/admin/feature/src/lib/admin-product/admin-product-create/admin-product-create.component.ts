import { Component } from '@angular/core'
import { WebUiFormField } from '@sandbox/web/ui/form'
import { AdminProductCreateStore } from './admin-product-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Product" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createProduct($event)">
          <ui-button label="Submit" type="submit"></ui-button>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [AdminProductCreateStore],
})
export class AdminProductCreateComponent {
  readonly vm$ = this.store.vm$
  fields = [
    WebUiFormField.input('name', { label: 'Name', required: true }),
    WebUiFormField.number('price', { label: 'Price', required: true, min: 0 }),
  ]
  constructor(private readonly store: AdminProductCreateStore) {}

  createProduct(input) {
    this.store.createProductEffect(input)
  }
}
