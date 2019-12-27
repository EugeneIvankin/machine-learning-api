import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

	login(): boolean {
		return true;
	}

	logout(): boolean {
		return true;
	}

	signUp(): boolean {
		return true;
	}
}
