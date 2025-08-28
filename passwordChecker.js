// passwordChecker.js
// Règles :
// - longueur >= 8
// - au moins un chiffre
// - au moins un caractère spécial (non alphanumérique)
// - ne contient pas "IPL" (insensible à la casse)

function passwordChecker(pwd) {
  if (typeof pwd !== 'string') return false;

  const hasMinLength = pwd.length >= 8;
  const hasDigit = /\d/.test(pwd);
  const hasSpecial = /[^A-Za-z0-9]/.test(pwd);
  const containsIPL = pwd.toLowerCase().includes('ipl');

  return hasMinLength && hasDigit && hasSpecial && !containsIPL;
}

module.exports = { passwordChecker };
