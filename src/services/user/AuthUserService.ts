import prismaClient from '../../prisma'
import { compare } from "bcryptjs"
import { sign } from 'jsonwebtoken'

interface AuthRequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        const user = await prismaClient.user.findFirst({
            where: { email },
        })
        if (!user) {
            throw new Error("O usuário não existe!")
        }


        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("A senha está incorreta")
        }

        //Se deu tudo certo, gera um token

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token
        }
    }
}

export { AuthUserService }