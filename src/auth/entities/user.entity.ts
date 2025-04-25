import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
        length: 100
    })
    nick_name: string

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
        length: 100
    })
    email: string
    
    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    password: string
}