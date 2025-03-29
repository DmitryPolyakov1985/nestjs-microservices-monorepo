import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dmitrypolyakov:i2XKZ8cp2309@mern-blog.yvkaq.mongodb.net/uber_logs?retryWrites=true&w=majority&appName=mern-blog'), RiderCoordinatesModule],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}
