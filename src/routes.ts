import { Router } from 'express'

//Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated';

//Controllers
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { UsersListController } from './controllers/user/UsersListController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { PasswordUpdateController } from './controllers/user/PasswordUpdateController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { CategoriesListController } from './controllers/category/CategoriesListController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ProductsListController } from './controllers/product/ProductsListController';

const router = Router();


//Rotas de USUÁRIOS

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
//Rotas privadas
router.get('/users', isAuthenticated, new UsersListController().handle)
router.get('/userinfo', isAuthenticated, new DetailUserController().handle)
// Alterar senha
router.post('/passwordUpdate', isAuthenticated, new PasswordUpdateController().handle)

//Rotas de PRODUTOS

//CATEGORIAS

router.post('/category',isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', new CategoriesListController().handle)

//PRODUTOS

router.post('/product', isAuthenticated, new CreateProductController().handle)
router.get('/products', new ProductsListController().handle)


export { router };