import { Entity, ObjectIdColumn, ObjectId, Column, Point } from "typeorm";


@Entity()
export class Aluno {

    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    nome: string;

    @Column()
    idade: string;

    @Column()
    curso: string;
}
