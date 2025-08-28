// passwordChecker.test.js
const { passwordChecker } = require('./passwordChecker');

describe('passwordChecker', () => {
  test('valide un mot de passe correct (>=8, spécial, chiffre, pas "IPL")', () => {
    expect(passwordChecker('Abcdef1!')).toBe(true);
    expect(passwordChecker('goodPass9@')).toBe(true);
  });

  test('refuse les mots de passe trop courts', () => {
    expect(passwordChecker('A1!')).toBe(false);
    expect(passwordChecker('Abc1@xy')).toBe(false); // 7 chars
  });

  test('refuse sans caractère spécial', () => {
    expect(passwordChecker('Abcdef12')).toBe(false);
    expect(passwordChecker('password9')).toBe(false);
  });

  test('refuse sans chiffre', () => {
    expect(passwordChecker('Abcdefg!')).toBe(false);
    expect(passwordChecker('NoDigits!@#')).toBe(false);
  });

  test('refuse si contient "IPL" (peu importe la casse)', () => {
    expect(passwordChecker('myIplPass1!')).toBe(false);
    expect(passwordChecker('xxIPLxx1!')).toBe(false);
    expect(passwordChecker('iplinside1@')).toBe(false);
  });

  test('refuse valeurs non string ou vides', () => {
    expect(passwordChecker('')).toBe(false);
    expect(passwordChecker(null)).toBe(false);
    expect(passwordChecker(undefined)).toBe(false);
    expect(passwordChecker(12345678)).toBe(false);
  });
});
