import { Controller, Post, Body, Get } from '@nestjs/common';

import { CaesarService } from './caesar.service';

@Controller('caesar')
export class CaesarController {
  constructor(private caesarService: CaesarService) {}
  @Get()
  getCiphers(): any {
    const ciphers = this.caesarService.getAllCiphers();
    return { cipher: ciphers };
  }

  @Post()
  addCipher(
    @Body('original') original: string,
    @Body('number') number: number,
  ): any {
    const caesarCipher = this.caesarService.insertCaesar(original, number);
    return { caesarCipher };
  }
}
