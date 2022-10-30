import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    url: process.env["DATABASE_URL"],
    autoLoadEntities: true,
    synchronize: true
  }), ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
