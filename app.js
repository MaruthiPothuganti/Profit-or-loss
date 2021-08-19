const numberOfStocks = document.querySelector("#input1");
const initialStockPrice = document.querySelector("#input2");
const currentStockPrice = document.querySelector("#input3");

const btnCalculate = document.querySelector("#btn-Check");

const output = document.querySelector("#output");

function showOutputMessage(msg) {
    output.innerText = msg;

}
btnCalculate.addEventListener("click", function calculate() {
    var currentCost = Number(currentStockPrice.value) * Number(numberOfStocks.value);
    var initialCost = Number(initialStockPrice.value) * Number(numberOfStocks.value);

    if (Number(currentStockPrice.value) > Number(initialStockPrice.value)) {
        var loss = currentCost - initialCost;
        var lossPer = (loss / initialCost) * 100;
        output.style.color = "red";
        showOutputMessage("The loss is ₹ " + loss + ". The loss percentage is " + lossPer + "% 😔");


    } else if (Number(initialStockPrice.value) > Number(currentStockPrice.value)) {
        var profit = initialCost - currentCost;
        var profitPer = (profit / initialCost) * 100;
        output.style.color = "green";
        showOutputMessage("The profit is ₹ " + profit + ". The profit percentage is " + profitPer + "% 🤑🥳");

    } else {
        showOutputMessage("No pain, No gain");
    }
})