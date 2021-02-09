import { Injectable } from '@nestjs/common';

import { Caesar } from './caesar.model';

@Injectable()
export class CaesarService {
  caesars: Caesar[] = [];

  insertCaesar(original: string) {
    const newCaesar = new Caesar(new Date().toString(), original, '');
    newCaesar.setCipher();
    this.caesars.push(newCaesar);
    return newCaesar;
  }
}
