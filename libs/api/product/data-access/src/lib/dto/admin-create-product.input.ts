import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateProductInput {
  @Field()
  name: string
}
