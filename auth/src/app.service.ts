import { Injectable } from '@nestjs/common';
import {IdentifyUserRequest} from "./identify-user-request.dto";

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '23452'
    },
    {
      userId: '345',
      stripeUserId: '23456'
    },
  ]

  getUser(identifyUserRequest: IdentifyUserRequest) {
    console.log("returning user");
    return this.users.find((user) => user.userId === identifyUserRequest.userId);
  }
}
