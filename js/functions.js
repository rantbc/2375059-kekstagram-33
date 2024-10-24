const stringValidate = (string, maxLength) => string.length <= maxLength ? true : false
stringValidate('mynewstring', 20);
// линтер ругается на консоль, проверял так: console.log(stringValidate('mynewstring', 20));

function palindromCheck (string) {
  const normalizeString = String(string).replaceAll(' ', '').toLowerCase();
  let emptyString = '';
  const stringLastSym = normalizeString.length - 1;
  for (let i = stringLastSym; i >= 0; i--) {
    emptyString += normalizeString[i];
  }
  return normalizeString === emptyString;
}
palindromCheck('топот');
// линтер ругается на консоль, проверял так: console.log(valindromCheck('топот'));
