import { Controller, Request, Post, UseGuards, Get, Res, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import path = require('path');

@Controller()
export class AppController {
	constructor(private authService: AuthService) {}
	
	@Post('auth/login')
	async login(@Body() user: any) {
		return this.authService.login(user);
	}

	@Get()
	async home(@Res() response) {
		response.sendFile(path.resolve('./public/index.html'));
	}
}
