import { Caesar } from './caesar.model';

test('properly ciphers a string', () => {
  let c = new Caesar(new Date().toString(), 'asdf', '', 5);
  expect(c.setCipher()).toBe('vnya');
});
