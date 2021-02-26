import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class AdminCreateProductInput {
  @Field()
  name: string

  @Field(() => Int)
  price: number
}
