const rangeChar = document.getElementById("range-char");
const numberChar = document.getElementById("number-char");

//syncing range and number inputs
rangeChar.addEventListener("input", syncCharAmount);
numberChar.addEventListener("input", syncCharAmount);

function syncCharAmount(e) {
  const valueAmount = e.target.value;
  rangeChar.value = valueAmount;
  numberChar.value = valueAmount;
}
