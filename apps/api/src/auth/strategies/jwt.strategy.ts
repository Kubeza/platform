import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    const secret =
      configService.get<string>('JWT_SECRET') ??
      'devops-ai-lab-super-secret-key-change-in-production';

    console.log('JWT Strategy Secret:', secret);

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  async validate(payload: { sub: string; email: string }) {
    console.log('JWT Payload:', payload);

    const user = await this.authService.validateUser(payload.sub);

    console.log('User from DB:', user);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return user;
  }
}