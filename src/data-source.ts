import "reflect-metadata"
import { DataSource } from "typeorm"
import { Aluno } from "./entities";
import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "clientes",
    url: `${process.env.DB}`,
    //host: "mongo-server",
    // port: 27018,
    // username: null,
    // password: null,
    synchronize: true,
    logging: false,
    entities: [
      __dirname + "/entities/*.ts"
    ],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source inicializado!"); //sucesso na promessa
  })
  .catch((e) => {
    console.error("Erro na inicialização do Data Source:", e);
  });

export default AppDataSource;