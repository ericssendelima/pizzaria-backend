import prismaClient from '../../prisma'
import { compare } from "bcryptjs"

interface AuthRequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        const user = await prismaClient.user.findFirst({
            where: { email }
        })
        if (!user) {
            throw new Error("O usuário não existe!")
        }


        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("A senha está incorreta")
        }

        //gerar um token JWT e devolver os dados do usuário como id, name e email
        
        return {ok: "Usuário Logado"}
    }
}

export { AuthUserService }