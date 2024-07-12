import { Router } from 'express'

//Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated';

//Controllers
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { UsersListController } from './controllers/user/UsersListController';
import { DetailUserController } from './controllers/user/DetailUserController';

const router = Router();

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
// Esta rota deve ser privada
router.get('/users', new UsersListController().handle)
router.get('/userinfo', isAuthenticated, new DetailUserController().handle)


// router.get('/teste', (req: Request, res: Response) => {
//     // throw new Error("Erro ao fazer esta requisição");
//     return res.json({ nome: "Sujeito Pizza!!!!" });
// })

export { router };