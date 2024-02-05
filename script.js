// Инициализация переменных для расчета стоимости
let diameterPrice = 0; // Цена за диаметр
let withDiskCoefficient = 1; // Коэффициент для учета диска
let quantity = 4; // Количество
let months = 2; // Количество месяцев
let radius = 1; // Значение кнопки (не инициализирована в коде, возможно, есть опечатка)

// Функция установки цены за диаметр
function setDiameter(price) {
  diameterPrice = price;
  updateButtonStyle('diameterButtons', price);
  calculate();
}

// Функция установки количества
function setQuantity(value) {
  quantity = value;
  updateButtonStyle('quantityButtons', value);
  calculate();
}

// Функция установки количества месяцев
function setMonths(value) {
  months = value;
  updateButtonStyle('monthsButtons', value);
  calculate();
}

// Функция установки значения кнопки (опечатка в объявлении переменной btn)
function setRadius(value) {
  radius = value;
  updateButtonStyle('radiusButtons', value);
  calculate();
}

// Обновление стилей кнопок в группе
function updateButtonStyle(buttonGroupId, activeValue) {
  const buttons = document.getElementById(buttonGroupId).getElementsByTagName('button');
  for (const button of buttons) {
    button.classList.remove('active');
    if (parseInt(button.textContent) === activeValue) {
      button.classList.add('active');
    }
  }
}

// Расчет общей стоимости услуги
function calculate() {
  withDiskCoefficient = document.getElementById('withDisk').checked ? 1.2 : 1;
  const totalCost = diameterPrice * withDiskCoefficient * quantity * months;
  document.getElementById('result').innerText = `Стоимость услуги: ${totalCost} руб.`;
}
