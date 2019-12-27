import { Controller, Get } from '@nestjs/common';

import { UserService } from '../../services/user';

@Controller('login')
export class LoginController {
	constructor(private readonly service: UserService) {}

	@Get()
	login(): boolean {
		return this.service.login();
	}
}
