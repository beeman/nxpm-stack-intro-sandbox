import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { WebAuthDataAccessModule } from '@sandbox/web/auth/data-access'
import { AuthPageModule } from '@sandbox/web/auth/ui'
import { RegisterComponent } from './register.component'

const routes: Routes = [{ path: '', component: RegisterComponent }]

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AuthPageModule, WebAuthDataAccessModule],
})
export class RegisterModule {}
