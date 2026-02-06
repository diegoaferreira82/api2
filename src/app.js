//APP está configurado cfe aula porém sem funcionar arquivo .ENV

import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json());
routes(app);

//é um midleware do express. Middle de erro, sempre recebe 4 parametros.
//intercepta uma requisição qualquer erro da aplicação e os trata para não repetir codigo nos controladores
//para declarar um middleware usa o app.use. assim quando chama o NEXT() ele
//sai de um .use para o outro .use, que no caso é o ManipuladorDeErros
app.use(manipuladorDeErros);

export default app