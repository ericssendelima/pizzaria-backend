import prismaClient from "../../prisma";

class CreateCategoryService {
    async execute(name: string) {

        if(!name){
            throw new Error("Digite o nome da Categoria")
        }

        const categoryAlreadyExists = await prismaClient.category.findFirst({
            where:{
                name: name
            }
        })

        if(categoryAlreadyExists){
            throw new Error("A categoria já existe")
        }        

        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select:{
                id: true,
                name: true
            }
        })

        return category
    }
}

export { CreateCategoryService }