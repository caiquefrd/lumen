import express from "express";
import routes from "./routes/index";
import dotenv from "dotenv";
import cors from "cors" // <--- import cors

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// enable CORS for all origins
app.use(cors());

// suportar parâmetros JSON no body da requisição
app.use(express.json());

// define a rota para o pacote /routes
app.use(routes);

// inicializa o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
