import express, { Request, Response } from 'express';
import { createController } from 'awilix-express';

import { UserService } from '../data/user/user-service';

interface ResourceDeps {
  userService: UserService;
}

const userResourceDefinition = (deps: ResourceDeps) => ({
  loginUser: async (req: Request, res: Response) => {
    const result = await deps.userService.loginUser(req.body);

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: 'User not found.' });
    }
  }
});

export const userResource = createController(userResourceDefinition)
  .prefix('/user')
  .post('/login', 'loginUser', { before: express.json() });