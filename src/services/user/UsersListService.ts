import prismaClient from "../../prisma"


class UsersListService {
    async execute() {
        const users = await prismaClient.user.findMany({
            select: {
                id: true,
                name: true,
                email: true
            }
        })
        return users
    }
}

export { UsersListService }

