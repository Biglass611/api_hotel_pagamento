const prisma = require("../config/prisma");
class UsuariosController {
    static async listar(req, res, next) {
        try {
            const usuarios = await prisma.usuario.findMany({
                orderBy: { id: "asc" }
            });
            res.send(200, usuarios);
            return next();
        } catch (error) {
            res.send(500, { message: "Erro ao listar usuários." });
            return next();
        }
    }
    static async criar(req, res, next) {
        try {
            const { nome, email } = req.body;
            if (!nome || !email) {
                res.send(400, {
                    message: "Nome e email são obrigatórios."
                });
                return next();
            }
            const novoUsuario = await prisma.usuario.create({
                data: { nome, email }
            });
            res.send(201, novoUsuario);
            return next();
        } catch (error) {
            if (error.code === "P2002") {
                res.send(409, { message: "Já existe usuário com esse email." });
                return next();
            }
            res.send(500, { message: "Erro ao cadastrar usuário." });
            return next();
        }
    }
}
module.exports = UsuariosController;