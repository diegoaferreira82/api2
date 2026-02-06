import mongoose from "mongoose";

function manipuladorDeErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos!" })
        //res.redirect("https://www.google.com.br") pode redirecionar para outra url!
        //é assim que faz envenenamento de servidor DNS mudando a rota para um site falso??
        //pode-se também criar um formulario personalizado com o tipo do erro como o 404
    } else {
        res.status(500).send({ message: "Erro interno do servidor." })
    }
}

export default manipuladorDeErros;