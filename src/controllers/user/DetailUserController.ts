import { DetailUserService } from "../../services/user/DetailUserService";

import { Response, Request } from "express";

class DetailUserController {
    async handle(req: Request, res: Response) {

        const detailUserService = new DetailUserService();

        const user = await detailUserService.execute();

        return res.json(user)
    }
}

export { DetailUserController }