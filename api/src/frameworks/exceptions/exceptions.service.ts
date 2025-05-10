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
  throwNotFoundException(message?: IExceptionMessage): never {
    throw new NotFoundException(message);
  }
  throwInternalServerErrorException(message?: IExceptionMessage): never {
    throw new InternalServerErrorException(message);
  }
  throwBadRequestException(message?: IExceptionMessage): never {
    throw new BadRequestException(message);
  }
  throwForbiddenException(message?: IExceptionMessage): never {
    throw new ForbiddenException(message);
  }
  throwUnauthorizedException(message?: IExceptionMessage): never {
    throw new UnauthorizedException(message);
  }
}
