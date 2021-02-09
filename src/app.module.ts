import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CaesarModule } from './caesar/caesar.module';

@Module({
  imports: [CaesarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
