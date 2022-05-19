import { Injectable } from '@nestjs/common';
import {RetrieveUserRequest} from "./retrieve-user-request.dto";

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

  retrieveUser(retrieveUserRequest: RetrieveUserRequest) {
    console.log("identifying the correct user");
    let currentUser = this.users.find((user) => user.userId === retrieveUserRequest.userId);
    return currentUser;
  }
}
