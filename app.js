const rangeChar = document.getElementById("range-char");
const numberChar = document.getElementById("number-char");
const formContainer = document.querySelector("#password-form");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const uppercaseEl = document.querySelector("#uppercase");

const lowercaseCharCodes = arrayLowToHigh(97, 122);
const numberCharCodes = arrayLowToHigh(48, 57);
const symbolCharCodes = arrayLowToHigh(33, 47)
  .concat(58, 64)
  .concat(91, 96)
  .concat(123, 126);
const uppercaseCharCodes = arrayLowToHigh(65, 90);

//syncing range and number inputs
rangeChar.addEventListener("input", syncCharAmount);
numberChar.addEventListener("input", syncCharAmount);

function syncCharAmount(e) {
  const valueAmount = e.target.value;
  rangeChar.value = valueAmount;
  numberChar.value = valueAmount;
}

//generating the password when the form is submitted
formContainer.addEventListener("submit", function (e) {
  e.preventDefault();

  const charAmount = numberChar.value;
  const includeUppercase = uppercaseEl.value;
  const includeNumbers = numbersEl.value;
  const includeSymbols = symbolsEl.value;

  const password = generatePassword(
    charAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
});

function generatePassword(
  charAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  //console.log(lowercaseCharCodes);
  let charCodes = lowercaseCharCodes;
  if (includeNumbers) charCodes = charCodes.concat(numberCharCodes);
  if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes);
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes);
}

//character codes looping function
function arrayLowToHigh(low, high) {
  let array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
