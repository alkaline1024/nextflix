export interface IExceptionMessage {
  message: string;
  code_error?: number;
}

export abstract class IExceptionService {
  abstract throwNotFoundException(data: IExceptionMessage): void;
  abstract throwInternalServerErrorException(data?: IExceptionMessage): void;
  abstract throwBadRequestException(data?: IExceptionMessage): void;
  abstract throwForbiddenException(data?: IExceptionMessage): void;
  abstract throwUnauthorizedException(data?: IExceptionMessage): void;
}
