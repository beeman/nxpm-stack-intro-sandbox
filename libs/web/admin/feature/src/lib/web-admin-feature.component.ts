import { Component } from '@angular/core'

@Component({
  template: `
    <ui-sidebar-page headerTitle="Admin" [links]="links">
      <router-outlet></router-outlet>
    </ui-sidebar-page>
  `,
})
export class WebAdminFeatureComponent {
  links = [
    { label: 'Dashboard', path: 'dashboard', icon: '' },
    { label: 'Products', path: 'products', icon: '' },
    { label: 'Users', path: 'users', icon: '' },
  ]
}
