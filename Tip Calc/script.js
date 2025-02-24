document.addEventListener("DOMContentLoaded", function () {
    const billInput = document.getElementById("bill");
    const tipButtons = document.querySelectorAll(".tip-btn");
    const customTipInput = document.getElementById("custom-tip");
    const peopleInput = document.getElementById("people");
    const tipAmountDisplay = document.getElementById("tip-amount");
    const totalAmountDisplay = document.getElementById("total-amount");
    const resetButton = document.getElementById("reset");

    let tipPercentage = 0;

    tipButtons.forEach(button => {
        button.addEventListener("click", function () {
            tipPercentage = parseFloat(this.dataset.tip);
            calculateTip();
        });
    });

    customTipInput.addEventListener("input", function () {
        tipPercentage = parseFloat(this.value) || 0;
        calculateTip();
    });

    function calculateTip() {
        const bill = parseFloat(billInput.value) || 0;
        const people = parseInt(peopleInput.value) || 1;
        const tipAmount = (bill * (tipPercentage / 100)) / people;
        const totalAmount = (bill / people) + tipAmount;
        tipAmountDisplay.textContent = "$" + tipAmount.toFixed(2);
        totalAmountDisplay.textContent = "$" + totalAmount.toFixed(2);
    }

    resetButton.addEventListener("click", function () {
        billInput.value = "";
        customTipInput.value = "";
        peopleInput.value = "";
        tipAmountDisplay.textContent = "$0.00";
        totalAmountDisplay.textContent = "$0.00";
    });
});