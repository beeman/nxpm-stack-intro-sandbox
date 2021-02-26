import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@sandbox/web/core/data-access'

@Component({
  template: `
    <ui-page headerTitle="Products">
      <div class="dark:bg-gray-800 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
        <ng-container *ngIf="products$ | async as products">
          <pre>{{ products | json }}</pre>
        </ng-container>
      </div>
    </ui-page>
  `,
})
export class WebProductFeatureComponent {
  products$ = this.data.publicProducts()
  constructor(private readonly data: WebCoreDataAccessService) {}
}
