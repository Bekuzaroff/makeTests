import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { User } from "./entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [TypeOrmModule.forFeature([User])]
})
export class AuthModule{

}