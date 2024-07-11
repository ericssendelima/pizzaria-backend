import { Router } from 'express'
import {CreateUserController} from './controllers/user/CreateUserController'

const router = Router();

router.post('/users', new CreateUserController().handle)

// router.get('/teste', (req: Request, res: Response) => {
//     // throw new Error("Erro ao fazer esta requisição");
//     return res.json({ nome: "Sujeito Pizza!!!!" });
// })

export { router };