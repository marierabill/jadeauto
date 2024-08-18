/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { Type } from "class-transformer";
import { ReviewCreateNestedManyWithoutCustomersInput } from "./ReviewCreateNestedManyWithoutCustomersInput";

@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReviewCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  reviews?: ReviewCreateNestedManyWithoutCustomersInput;
}

export { CustomerCreateInput as CustomerCreateInput };
