import prismaClient from "../../prisma";

class ProductsListService {
    async execute(category_id: string) {
        if(!category_id){
            throw new Error("Selecione uma categoria")
        }

        const categoryExists = await prismaClient.category.findFirst({
            where:{
                id: category_id
            },
            select:{
                id:true
            }
        })

        if(!categoryExists){
            throw new Error("Esta categoria não existe!")
        }

        const products = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            },
            select:{
                id: true,
                name: true,
                price: true,
                description: true,
                banner: true
            }
        })

        if(products.length === 0){
            throw new Error("Categoria sem produtos!")
        }

        return products
    }
}

export { ProductsListService }