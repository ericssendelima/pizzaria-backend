import {Request, Response} from 'express'

import { UsersListService } from '../../services/user/UsersListService'

class UsersListController {
    async handle(req: Request, res: Response) {
        const usersListService = new UsersListService();
        const userList = await usersListService.execute()
        return res.json(userList)
    }
}

export { UsersListController }