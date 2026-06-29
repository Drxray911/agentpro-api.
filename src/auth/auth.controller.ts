import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PinLoginDto } from './dto/pin-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('pin-login')
  async pinLogin(@Body() dto: PinLoginDto) {
    return this.authService.pinLogin(dto);
  }
}
