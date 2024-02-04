document.addEventListener('DOMContentLoaded', function () {
    const diameterSelect = document.getElementById('diameter');
    const withDiskCheckbox = document.getElementById('withDisk');
    const quantityInput = document.getElementById('quantity');
    const monthsInput = document.getElementById('months');
    const resultElement = document.getElementById('result');

    function calculateCost() {
        const diameterCost = parseFloat(diameterSelect.value);
        const withDiskCoefficient = withDiskCheckbox.checked ? 1.2 : 1;
        const quantity = parseInt(quantityInput.value);
        const months = parseInt(monthsInput.value);

        const totalCost = diameterCost * withDiskCoefficient * quantity * months;

        resultElement.textContent = `${totalCost} руб.`;
    }

    // Обработчики событий для изменения параметров
    diameterSelect.addEventListener('change', calculateCost);
    withDiskCheckbox.addEventListener('change', calculateCost);
    quantityInput.addEventListener('input', calculateCost);
    monthsInput.addEventListener('input', calculateCost);

    // Инициализация при загрузке страницы
    calculateCost();
});
