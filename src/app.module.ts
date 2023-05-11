import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/product-api', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })  ],
      controllers: [AppController],
      providers: [AppService],
    })
export class AppModule { }
