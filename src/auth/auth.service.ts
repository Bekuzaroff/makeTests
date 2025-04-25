import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    create_user(user: CreateUserDto){
        const new_user = this.userRepository.create(user)

        if(user.password !== user.confirm_password){
            throw new Error("passwords do not match");
        }
        this.userRepository.save(new_user);
        return {
            status: 'success'
        }
    }
}