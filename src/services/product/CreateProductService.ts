import prismaClient from "../../prisma";

interface CreateProductRequest{
    name: string,
    price: string,
    description: string,
    banner: string,
    category_id: string
}

class CreateProductService {
    async execute({name, price, description, banner, category_id}: CreateProductRequest) {
        if(!name || !price || !description || !banner || !category_id){
            throw new Error("Preencha todos os campos")
        }

        const productAlreadyExists = await prismaClient.product.findFirst({
            where:{
                name
            }
        });

        if(productAlreadyExists){
            throw new Error("Este produto já existe")
        }

        const product = await prismaClient.product.create({
            data:{
                name,
                price,
                description,
                banner,
                category_id
            },
            select:{
                id: true,
                name: true,
                price: true,
                description: true,
                banner: true,
                category_id: true
            }
        })

        return product
    }
}

export { CreateProductService }