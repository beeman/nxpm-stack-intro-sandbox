import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@sandbox/api/core/data-access'

@InputType()
export class AdminListProductInput extends CorePagingInput {
  @Field({ nullable: true })
  name?: string
}
