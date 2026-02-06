import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ObjectiveNotFoundException } from './objective-not-found-exception';

@Catch(ObjectiveNotFoundException)
export class ObjectiveNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: ObjectiveNotFoundException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const res = context.getResponse<Response>();
    res.status(HttpStatus.NOT_FOUND).json({ message: exception.message });
  }
}
