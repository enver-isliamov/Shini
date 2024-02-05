// Инициализация переменных для расчета стоимости
let diameterPrice = 0; // Цена за диаметр
let withDiskCoefficient = 1; // Коэффициент для учета диска
let quantity = 4; // Количество
let months = 2; // Количество месяцев
let diameter = 1; // Значение кнопки (не инициализирована в коде, возможно, есть опечатка)

// Функция установки цены за диаметр
function setDiameter(value, price) {
  diameter = value;
  diameterPrice = price;
  updateButtonStyle('diameterButtons', value);
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

function updateButtonStyle(buttonGroupId, activeValue) {
  const buttons = document.getElementById(buttonGroupId).getElementsByTagName('button');
  for (const button of buttons) {
    if (button.textContent.startsWith('R') && button.textContent !== `R${activeValue}`) {
      button.style.backgroundColor = "var(--border)";
    } else {
      button.classList.remove('active');
      if (parseInt(button.textContent) === activeValue) {
        button.classList.add('active');
        button.style.backgroundColor = "var(--primary-3)";
      } else {
        button.style.backgroundColor = "var(--border)";
      }
    }
  }
}



// Расчет общей стоимости услуги
function calculate() {
  withDiskCoefficient = document.getElementById('withDisk').checked ? 1.2 : 1;
  const totalCost = diameterPrice * withDiskCoefficient * quantity * months;
  document.getElementById('result').innerText = `Стоимость услуги: ${totalCost} руб.`;
}
