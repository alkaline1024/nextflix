import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  IExceptionMessage,
  IExceptionService,
} from '@core/abstracts/exception-service.abstract';

@Injectable()
export class ExceptionsService implements IExceptionService {
  throwNotFoundException(message?: IExceptionMessage): void {
    throw new NotFoundException(message);
  }
  throwInternalServerErrorException(message?: IExceptionMessage): void {
    throw new InternalServerErrorException(message);
  }
  throwBadRequestException(message?: IExceptionMessage): void {
    throw new BadRequestException(message);
  }
  throwForbiddenException(message?: IExceptionMessage): void {
    throw new ForbiddenException(message);
  }
  throwUnauthorizedException(message?: IExceptionMessage): void {
    throw new UnauthorizedException(message);
  }
}
