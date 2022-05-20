import {Injectable} from '@nestjs/common';
import {RetrieveUserRequest} from "./retrieve-user-request.dto";

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '89dfcfd0-3422-4a0d-9afd-8886a8a068df',
      name: 'Alice'
    },
    {
      userId: '345',
      stripeUserId: '0de8700b-2f80-4f20-8565-a14659236db1',
      name: 'Bob'
    },
  ]

  retrieveUser(retrieveUserRequest: RetrieveUserRequest) {
    console.log("identifying the correct user");
    return this.users.find((user) => user.userId === retrieveUserRequest.userId);
  }
}
