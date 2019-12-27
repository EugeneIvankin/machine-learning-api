import { Module } from '@nestjs/common';

import { LoginController } from './login';
import { LogoutController } from './logout';
import { SignUpController } from './sign-up';
import { UserService } from '../services/user';

@Module({
	controllers: [
		LoginController,
		LogoutController,
		SignUpController,
	],
	providers: [UserService],
})
export class UserModule {}
