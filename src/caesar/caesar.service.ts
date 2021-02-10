import { Injectable } from '@nestjs/common';

import { Caesar } from './caesar.model';

@Injectable()
export class CaesarService {
  caesars: Caesar[] = [];

  insertCaesar(original: string) {
    let num = Math.floor(Math.random() * 25);
    const newCaesar = new Caesar(new Date().toString(), original, '', num);
    newCaesar.setCipher();
    this.caesars.push(newCaesar);
    return newCaesar;
  }
}
