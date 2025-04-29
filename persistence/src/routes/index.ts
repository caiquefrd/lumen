import { Router, Request, Response } from "express";
import persistance from "./persistance";
const routes = Router();
routes.use("/persistance", persistance);
//aceita qualquer método HTTP ou URL
// routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;