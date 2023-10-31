/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsUrl, IsEmail } from 'class-validator';

export class UserDto {
    @IsNotEmpty() id: number;
    @IsNotEmpty() givenName: string;
    @IsNotEmpty() surName: string;
    @IsNotEmpty() @IsNumber() age: number;
    @IsNotEmpty() @IsEmail() email: string;
    @IsNotEmpty() address: string;
    @IsUrl() photoURL?: string;
}