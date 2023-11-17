import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from './domain';
import { MongooseModule } from '@nestjs/mongoose';

//todo apiproperties
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load:[configuration]
    }),
    DomainModule,
    MongooseModule.forRoot('mongodb+srv://abdulselamsc:rMflhUqGjSJhpVNF@cluster0.rphocqt.mongodb.net/eteration')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
