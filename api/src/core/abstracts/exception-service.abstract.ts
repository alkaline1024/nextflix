export interface IExceptionMessage {
  message: string;
  code_error?: number;
}

export abstract class IExceptionService {
  abstract throwNotFoundException(data: IExceptionMessage): never;
  abstract throwInternalServerErrorException(data?: IExceptionMessage): never;
  abstract throwBadRequestException(data?: IExceptionMessage): never;
  abstract throwForbiddenException(data?: IExceptionMessage): never;
  abstract throwUnauthorizedException(data?: IExceptionMessage): never;
}
