alert("Hello TEJ");
let samosaQuantity = 0;
let teaQuantity = 0;
function samosaIncrement() {
  samosaQuantity = samosaQuantity + 1;
}
function samosaDecrement() {
  samosaQuantity = samosaQuantity - 1;
}
function teaIncrement() {
  teaQuantity = teaQuantity + 1;
}
function teaDecrement() {
  teaQuantity = teaQuantity - 1;
}
const samosaIncrementButton = document.getElementById("samosaIncrement");
const samosaDecrementButton = document.getElementById("samosaDecrement");
samosaIncrementButton.addEventListener("click", () => {
  console.log("samosaIncrementButton");
  samosaQuantity++;
  const quantityOfSamosa = document.getElementById("samosaQuantity");
  quantityOfSamosa.innerHTML = samosaQuantity;
});

samosaDecrementButton.addEventListener("click", () => {
  samosaQuantity--;
  const quantityOfSamosa = document.getElementById("samosaQuantity");
  quantityOfSamosa.innerHTML = samosaQuantity;
});

const teaIncrementButton = document.getElementById("teaIncrement");
const teaDecrementButton = document.getElementById("teaDecrement");

teaIncrementButton.addEventListener("click", () => {
  console.log("teaIncrementButton");
  teaQuantity++;
  const quantityOfTea = document.getElementById("teaQuantity");

  quantityOfTea.innerHTML = teaQuantity;
});

teaDecrementButton.addEventListener("click", () => {
  teaQuantity--;
  const quantityOfTea = document.getElementById("teaQuantity");
  quantityOfTea.innerHTML = teaQuantity;
});

const grandTotalButton = document.getElementById("grandTotal");
grandTotalButton.addEventListener("click", () => {
  let samosaPrice = document.getElementById("samosaPrice").value;
  let teaPrice = document.getElementById("teaPrice").value;
  let samosaTotal = document.getElementById("samosaTotal");
  samosaTotal.innerHTML = samosaQuantity * samosaPrice;
  let teaTotal = document.getElementById("teaTotal");
  teaTotal.innerHTML = teaQuantity * teaPrice;
  let totalPrice = document.getElementById("totalOfBoth");
  totalPrice.innerHTML = samosaQuantity * samosaPrice + teaQuantity * teaPrice;
  let vat = document.getElementById("vat");
  vat.innerHTML =
    ((samosaQuantity * samosaPrice + teaQuantity * teaPrice) * 13) / 100;
  let tip = document.getElementById("tip");
  tip.innerHTML =
    ((samosaQuantity * samosaPrice + teaQuantity * teaPrice) * 10) / 100;
  let grandTotal = document.getElementById("totalOfAll");
  grandTotal.innerHTML =
    samosaQuantity * samosaPrice +
    teaQuantity * teaPrice +
    ((samosaQuantity * samosaPrice + teaQuantity * teaPrice) * 13) / 100 +
    ((samosaQuantity * samosaPrice + teaQuantity * teaPrice) * 10) / 100;
});
