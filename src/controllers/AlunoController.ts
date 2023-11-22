import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Aluno } from "../entities/Aluno";
import { ObjectId } from 'mongodb';
import * as dotenv from "dotenv";
dotenv.config();


class AlunoController {

    public async getAluno(req: Request, res: Response): Promise<Response> {
        try{
            const rep = AppDataSource.getRepository(Aluno)
            const all = await rep.find()
            return res.json(all)
        }catch(error){
            return res.json(error)
        }
    }

    public async getOne(req: Request, res: Response): Promise<Response>{
        try{
            const id:any = new ObjectId(req.params.uuid)
            const rep = AppDataSource.getMongoRepository(Aluno)
            const findAluno:any = await rep.findOneOrFail(id).catch((err) => {
                console.log(err);
                return res.status(404).json({'message': "Aluno não existe!"})
                
            })
            return res.status(200).json(findAluno)
        }catch(err){
            return res.status(400).json({'message': 'Erro ao pegar o aluno!', "erro": true})
        }
    }

    public async postAluno(req: Request, res: Response): Promise<Response> {
    try{
        const createAluno = req.body
        const alunoRepository = AppDataSource.getRepository(Aluno)
        const insertEquip = new Aluno();
        insertEquip.nome = createAluno.nome
        insertEquip.idade = createAluno.idade
        insertEquip.curso = createAluno.curso
        
        const allAluno = await alunoRepository.save(insertEquip)
        return res.json(allAluno)

    }catch(error){
        return res.json(error)
    }
    }
        
    public async putAluno(req: Request, res: Response): Promise<Response> {
        try {
            const createAluno = req.body;
            const id: any = new ObjectId(req.params.uuid)
            const rep = AppDataSource.getMongoRepository(Aluno)
            const findAluno:any = await rep.findOneOrFail(id).catch((err) => {
                console.log(err);
                return res.status(404).json({'message': "Aluno não existe!"})
                
            }) 
            findAluno.nome = createAluno.type;
            findAluno.idede = createAluno.idade
            findAluno.curso = createAluno.curso

            const alunoAtualizado = await rep.save(findAluno);
            return res.json({alunoAtualizado, "message": "Foi"});
        } catch (error) {
            return res.json(error);
        }
    }
 
}

export default new AlunoController()
