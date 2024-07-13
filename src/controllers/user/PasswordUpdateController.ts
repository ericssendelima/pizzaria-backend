import { Request, Response } from 'express'

import { PasswordUpdateService } from '../../services/user/PasswordUpdateService'

class PasswordUpdateController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;
        const { newPassword } = req.body;

        const passwordUpdateService = new PasswordUpdateService();

        const passwordUpdate = await passwordUpdateService.execute({ user_id, newPassword })

        return res.json(passwordUpdate)
    }
}

export { PasswordUpdateController }