let diameterCosts = {
    'R13': 350,
    'R14': 350,
    'R15': 400,
    'R16': 400,
    'R17': 450,
    'R18': 450,
    'R19': 500,
    'R20': 500,
    'R21': 550
};

let wheelCoefficient = 1.2;

let quantitySelect = document.getElementById('quantitySelect');
let wheelCheckbox = document.getElementById('wheelCheckbox');
let costValue = document.getElementById('costValue');

function updateCost(diameterCost) {
    let selectedDiameter = getSelectedDiameter();
    let selectedWheel = wheelCheckbox.checked ? wheelCoefficient : 1;
    let selectedQuantity = quantitySelect.value;
    let selectedMonths = getSelectedMonths();

    let totalCost = selectedDiameter * selectedWheel * selectedQuantity * selectedMonths;
    costValue.innerText = totalCost;
}

function getSelectedDiameter() {
    let diameterButtons = document.querySelectorAll('#diameterBlock .btn');
    for (let button of diameterButtons) {
        if (button.classList.contains('active')) {
            return diameterCosts[button.innerText];
        }
    }
}

function getSelectedMonths() {
    let monthButtons = document.querySelectorAll('#monthsBlock .btn');
    for (let button of monthButtons) {
        if (button.classList.contains('active')) {
            return parseInt(button.innerText);
        }
    }
}

function setActiveButton(buttons, index) {
    buttons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

document.querySelectorAll('#diameterBlock .btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        setActiveButton(document.querySelectorAll('#diameterBlock .btn'), index);
        updateCost();
    });
});

document.querySelectorAll('#monthsBlock .btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        setActiveButton(document.querySelectorAll('#monthsBlock .btn'), index);
        updateCost();
    });
});

wheelCheckbox.addEventListener('change', updateCost);

quantitySelect.addEventListener('change', updateCost);

// Set default values
document.querySelector('#diameterBlock .btn').click();
document.querySelector('#monthsBlock .btn:nth-child(3)').click();
