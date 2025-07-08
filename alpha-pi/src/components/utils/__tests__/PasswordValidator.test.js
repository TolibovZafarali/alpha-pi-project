import PasswordValidator from '../PasswordValidator.js';

describe('PasswordValidator', () => {
  test('valid passwords return true', () => {
    expect(PasswordValidator('abc12345')).toBe(true);
    expect(PasswordValidator('A1b2C3d4')).toBe(true);
  });

  test('invalid passwords return false', () => {
    expect(PasswordValidator('abcdefg')).toBe(false); // too short
    expect(PasswordValidator('abcdefgh')).toBe(false); // no digits
    expect(PasswordValidator('12345678')).toBe(false); // no letters
  });
});
