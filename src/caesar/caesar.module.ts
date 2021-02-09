import { Module } from '@nestjs/common';
import { CaesarController } from './caesar.controller';
import { CaesarService } from './caesar.service';

@Module({ controllers: [CaesarController], providers: [CaesarService] })
export class CaesarModule {}
