import { Request, Response } from 'express'
import { CategoriesListService } from '../../services/category/CategoriesListService'


class CategoriesListController {
    async handle(req: Request, res: Response) {

        const categoriesListService = new CategoriesListService();

        const categoriesList = await categoriesListService.execute()

        return res.json(categoriesList)

    }
}

export { CategoriesListController }