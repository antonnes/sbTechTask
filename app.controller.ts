import { Controller, Request, Post, UseGuards, Get, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import path = require('path');

@Controller()
export class AppController {
	constructor(private authService: AuthService) {}
	@UseGuards(AuthGuard('local'))
	@Post('auth/login')
	async login(@Request() req) {
		return this.authService.login(req.user);
	}

	@Get()
	async home(@Res() response) {
		response.sendFile(path.resolve('./public/index.html'));
	}
}
