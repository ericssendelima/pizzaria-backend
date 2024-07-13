import { Request, Response } from "express";
import { ProductsListService } from "../../services/product/ProductsListService";

class ProductsListController{
    async handle(req: Request, res: Response){
        const {category_id} = req.body;

        const productsListService = new ProductsListService();

        const productsList = await productsListService.execute(category_id)

        return res.json(productsList)
    }
}

export { ProductsListController }