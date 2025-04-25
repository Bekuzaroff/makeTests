import { IsEmail, IsString, MinLength } from "class-validator"


export class CreateUserDto{
    id: number

    @IsString({message: 'nick_name should be a string'})
    @MinLength(6, {message: 'your nick name must be more than 6 characters'})
    nick_name: string

    @IsEmail()
    email: string
    
    @MinLength(6, {message: 'your password must be more than 6 characters'})
    password: string

    confirm_password: string
}