import { Router } from "express";
import { AlunoController } from "../controllers";


const routes = Router()

routes.get("/listAlunos", AlunoController.getAluno)
routes.get("/listOne/:uuid", AlunoController.getOne)
routes.post("/createAluno",  AlunoController.postAluno)
routes.put("/updateAluno/:uuid", AlunoController.putAluno)


export default routes;