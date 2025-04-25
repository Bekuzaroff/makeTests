import { Body, Controller, Post } from "@nestjs/common";
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