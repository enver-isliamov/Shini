let diameterPrice = 0;
let withDiskCoefficient = 1;
let quantity = 4;
let months = 2;

function setDiameter(price) {
  diameterPrice = price;
  updateButtonStyle('diameterButtons', price);
  calculate();
}

function setQuantity(value) {
  quantity = value;
  updateButtonStyle('quantityButtons', value);
  calculate();
}

function setMonths(value) {
  months = value;
  updateButtonStyle('monthsButtons', value);
  calculate();
}

function updateButtonStyle(buttonGroupId, activeValue) {
  const buttons = document.getElementById(buttonGroupId).getElementsByTagName('button');
  for (const button of buttons) {
    button.classList.remove('active');
    if (parseInt(button.textContent) === activeValue) {
      button.classList.add('active');
    }
  }
}

function calculate() {
  withDiskCoefficient = document.getElementById('withDisk').checked ? 1.2 : 1;
  const totalCost = diameterPrice * withDiskCoefficient * quantity * months;
  document.getElementById('result').innerText = `Стоимость услуги: ${totalCost} руб.`;
}