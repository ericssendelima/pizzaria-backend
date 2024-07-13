import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface PasswordUpdateRequest {
    user_id: string,
    newPassword: string
}

class PasswordUpdateService {
    async execute({ user_id, newPassword }: PasswordUpdateRequest) {
        if (!newPassword) {
            throw new Error("Digite uma senha")
        }

        //criptografar nova senha

        const passwordEncrypted = await hash(newPassword, 8)

        const userPasswordUpdated = await prismaClient.user.update({
            where: {
                id: user_id
            },
            data: {
                password: passwordEncrypted
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        return userPasswordUpdated


    }
}

export { PasswordUpdateService }