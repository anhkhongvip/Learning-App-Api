import { Request, Response } from 'express';
import { authenticator } from 'otplib';
class UserController {
    register = async (req: Request, res: Response) => {
        try {
            authenticator.options = { step: 30 };
            const secret = authenticator.generateSecret();
            const token = authenticator.generate(secret);
            res.status(200).send({body: req.body, token})
        }
        catch(e) {
            res.status(500).send({Error: e})
        }
    }
}

export default new UserController();