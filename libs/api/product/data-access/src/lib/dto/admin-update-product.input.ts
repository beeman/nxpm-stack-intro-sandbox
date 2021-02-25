import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateProductInput {
  @Field({ nullable: true })
  name?: string
}
