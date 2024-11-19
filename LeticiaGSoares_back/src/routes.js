import { Router } from "express";
import jwt from 'jsonwebtoken'
import Usuario from "./models/usuario.js";
import Publicacao from "./models/publicacao.js";
import Comentario from "./models/comentario.js";
import Feedback from "./models/feedback.js";


const syncTables = async () => {
    Usuario.belongsToMany(Publicacao,
        { through: Feedback,
        foreignKey: 'id_usuario',
        otherKey: 'id_publicacao'
        }
    )
    Publicacao.belongsToMany(Usuario,
        { through: Feedback,
        foreignKey: 'id_publicacao',
        otherKey: 'id_usuario'
        }
    )
    Usuario.belongsToMany(Publicacao,
        { through: Comentario,
        foreignKey: 'id_usuario',
        otherKey: 'id_publicacao'
        }
    )
    Publicacao.belongsToMany(Usuario,
        { through: Comentario,
        foreignKey: 'id_publicacao',
        otherKey: 'id_usuario'
        }
    )

    await Usuario.sync()
    await Publicacao.sync()
    await Feedback.sync()
    await Comentario.sync()
}

syncTables()


const router = Router()

const jwtPass = 'secretKey'

router.post('/login', async (req, res)=> {
    const {email, senha} = req.body
    if(!email || !senha) res.status(400).json({error: "Email e senha são obrigatórios"})

    try {
        const user = await Usuario.findOne({where: {email, senha}})
        if(!user) 
            res.status(401).json({error: "Email ou senha incorretos"}) 
        else{
            const token = await jwt.sign({user}, jwtPass, {expiresIn: '1h'})

            res.status(200).json(token)
        }
    } catch (err) {
        console.error({error: err})
        res.status(500).json({error: err})
    }
})
router.get('/', async (req, res)=> {
    try {
        const publicacoes = await Publicacao.findAll()

        res.status(200).json({publicacoes})

    } catch (err) {
        console.error({error: err})
        res.status(500).json({error: err})
    }
})
// router.post('/login', async (req, res)=> {
//     const {email, senha} = req.body

//     try {
//         const isUserValid = Usuario.findOne({where: {email, senha}})
//     } catch (err) {
//         console.error({error: err})
//         res.status(500).json({error: err})
//     }
// })

export default router