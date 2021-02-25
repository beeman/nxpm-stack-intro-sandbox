import { Injectable } from '@angular/core'
import { ApolloAngularSDK } from '@sandbox/shared/util/sdk'

@Injectable({ providedIn: 'root' })
export class WebCoreDataAccessService extends ApolloAngularSDK {}
