import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn} from 'typeorm';

@Entity('Users')
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz', update: false })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
    updatedAt: string;

}