import { Injectable } from '@nestjs/common';

import { Caesar } from './caesar.model';

@Injectable()
export class CaesarService {
  caesars: Caesar[] = [];

  insertCaesar(original: string, number: number) {
    const newCaesar = new Caesar(new Date().toString(), original, '', number);
    newCaesar.setCipher();
    this.caesars.push(newCaesar);
    return newCaesar;
  }
  getAllCiphers() {
    return this.caesars;
  }
}
