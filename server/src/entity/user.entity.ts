import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({ length: 255 })
    email: string

    @Column()
    password: string;

    @Column()
    name: string;
}