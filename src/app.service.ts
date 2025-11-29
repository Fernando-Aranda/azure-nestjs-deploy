import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMensaje(): string {
    return 'Hola! soy un mensaje.';
  }
}

