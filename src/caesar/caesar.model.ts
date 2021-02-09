export class Caesar {
  constructor(
    public id: string,
    public original: string,
    public cipher: string,
  ) {}
  setCipher = () => {
    const abc = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    let result = '';
    for (let i = 0; i < this.original.length; i++) {
      if (
        this.original[i] === ' ' ||
        this.original[i] === '?' ||
        this.original[i] === '!' ||
        this.original[i] === '.' ||
        this.original[i] === ','
      ) {
        continue;
      }
      let newIdx = abc.findIndex((letter) => letter === this.original[i]) - 4;
      if (newIdx < 0) {
        newIdx += 26;
      } else if (newIdx >= 26) {
        newIdx -= 26;
      }
      result += abc[newIdx];
    }
    this.cipher = result;
    return this.cipher;
  };
}
