import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateProductInput, Role } from '@sandbox/web/core/data-access'
import { WebUiFormField } from '@sandbox/web/ui/form'
import { AdminProductEditStore } from './admin-product-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Edit product ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.item">
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateProduct($event)">
            <ui-button label="Submit" type="submit"></ui-button>
          </ui-form>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminProductEditStore],
})
export class AdminProductEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})
  fields = [WebUiFormField.input('name', { label: 'Name' })]

  constructor(private readonly store: AdminProductEditStore) {}

  updateProduct(input: AdminUpdateProductInput) {
    const { name } = input
    this.store.updateProductEffect({ name })
  }
}
