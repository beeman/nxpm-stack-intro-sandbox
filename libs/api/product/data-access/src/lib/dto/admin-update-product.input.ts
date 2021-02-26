import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class AdminUpdateProductInput {
  @Field({ nullable: true })
  name?: string

  @Field(() => Int, { nullable: true })
  price?: number
}
