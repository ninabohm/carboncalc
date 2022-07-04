import {Injectable} from '@nestjs/common';
import {RetrieveUserRequest} from "./retrieve-user-request.dto";
import users from '../db/users-db';

@Injectable()
export class AppService {


  retrieveUser(retrieveUserRequest: RetrieveUserRequest) {
    console.log("identifying the correct user");
    return users.find((user) => user.userId === retrieveUserRequest.userId);
  }
}