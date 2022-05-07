import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: __dirname + "/database/confiarlegal.db",
  models: [__dirname + "/models"],
});
