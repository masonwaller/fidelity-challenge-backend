import { Controller, Post, Body } from '@nestjs/common';

import { CaesarService } from './caesar.service';

@Controller('caesar')
export class CaesarController {
  constructor(private caesarService: CaesarService) {}

  @Post()
  addCipher(@Body('original') original: string): any {
    const caesarCipher = this.caesarService.insertCaesar(original);
    return { cipher: caesarCipher };
  }
}
