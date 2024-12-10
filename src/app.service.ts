import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'this is the best exam \n Routes: \n /users (GET to watch all, POST to create)\n subroute urers/{id} to DELETE)\n subroute users/healt to check connection to database';
  }
}
