import { IsEmail, IsString, MinLength } from "class-validator"


export class CreateUserDto{
    id: number

    @IsString({message: 'nick_name should be a string'})
<<<<<<< HEAD
    @MinLength(6, {message: 'your nick name must be more than 6 characters'})
=======
>>>>>>> ea2e62f7bd05fa9383f403e0c827cb74e4940891
    nick_name: string

    @IsEmail()
    email: string
    
    @MinLength(6, {message: 'your password must be more than 6 characters'})
    password: string
<<<<<<< HEAD

    confirm_password: string
=======
>>>>>>> ea2e62f7bd05fa9383f403e0c827cb74e4940891
}