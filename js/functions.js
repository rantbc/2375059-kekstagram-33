function stringValidate (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
stringValidate('mynewstring', 20);
// линтер ругается на консоль, проверял так: console.log(stringValidate('mynewstring', 20));

function valindromCheck (string) {
  let normalizeString = String(string);
  normalizeString = normalizeString.replaceAll();
  normalizeString = normalizeString.toLowerCase();
  let emptyString = '';
  const stringLastSym = normalizeString.length - 1;
  for (let i = stringLastSym; i >= 0; i--) {
    emptyString += normalizeString[i];
  }
  if (normalizeString === emptyString) {
    return true;
  } else {
    return false;
  }
}
valindromCheck('топот');
// линтер ругается на консоль, проверял так: console.log(valindromCheck('топот'));
