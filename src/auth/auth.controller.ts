import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: { email: string; password: string; role?: string }) {
    return this.authService.register(
        body.email,
        body.password,
        body.role || 'customer', 
    );
  }

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    return   this.authService.login(body.email, body.password);
 
  }
}
