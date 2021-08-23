const rangeChar = document.getElementById("range-char");
const numberChar = document.getElementById("number-char");
const formContainer = document.querySelector("#password-form");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const uppercaseEl = document.querySelector("#uppercase");

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
