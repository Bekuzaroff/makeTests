<<<<<<< HEAD
import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
=======
import { Body, Controller, Post } from "@nestjs/common";
>>>>>>> ea2e62f7bd05fa9383f403e0c827cb74e4940891
import { CreateUserDto } from "./dtos/create-user.dto";
import { AuthService } from "./auth.service";

@Controller('/api/v1/user')
export class AuthController{
    constructor(private readonly service: AuthService){

    }
    @Post('/create')
    create_user(@Body() user: CreateUserDto){
        return this.service.create_user(user);
    }
}