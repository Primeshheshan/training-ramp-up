import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { UserModule } from './user/user.module';
import { RefreshTokenCookieStrategy } from './strategies/refreshTokenCookie.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({}),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    RefreshTokenStrategy,
    AccessTokenStrategy,
    RefreshTokenCookieStrategy,
  ], //
  exports: [AuthService],
})
export class AuthModule {}
