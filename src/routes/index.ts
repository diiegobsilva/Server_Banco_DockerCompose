import cors = require("cors");
import { Router, Request, Response } from "express";

import aluno from "./aluno";
import e = require("cors");

const routes = Router()

routes.use(cors());

routes.use("/aluno", aluno);

routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;