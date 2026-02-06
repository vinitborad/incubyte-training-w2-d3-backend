import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // const headers = req.headers;
    // if (headers.authorization === 'secret') {
    //   next();
    // } else {
    //   res.status(401).send('Not authorized');
    // }
    next();
  }
}
