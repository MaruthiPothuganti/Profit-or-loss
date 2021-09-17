const numberOfStocks = document.querySelector("#input1");
const initialStockPrice = document.querySelector("#input2");
const currentStockPrice = document.querySelector("#input3");

const btnCalculate = document.querySelector("#btn-Check");

const output = document.querySelector("#output");
output.style.display = "none";
document.getElementById('loading').style.display = "none";
document.getElementById('profit').style.display = "none";
document.getElementById('loss').style.display = "none";

function showOutputMessage(msg) {
    output.innerText = msg;
    output.style.display = "";

}
btnCalculate.addEventListener("click", function calculate() {
    var currentCost = Number(currentStockPrice.value) * Number(numberOfStocks.value);
    var initialCost = Number(initialStockPrice.value) * Number(numberOfStocks.value);
    document.getElementById('loading').style.display = "none";
    document.getElementById('profit').style.display = "none";
    document.getElementById('loss').style.display = "none";
    output.style.display = "none";


    if (Number(numberOfStocks.value) > 0 && Number(currentStockPrice.value) > 0 && Number(initialStockPrice.value) > 0 && Number(currentStockPrice.value) != Number(initialStockPrice.value)) {

        if (Number(currentStockPrice.value) > Number(initialStockPrice.value)) {
            var loss = currentCost - initialCost;
            var lossPer = ((loss / initialCost) * 100).toFixed(2);
            document.getElementById('loading').style.display = "block";
            setTimeout(function() {
                document.getElementById('loading').style.display = "none";
                output.style.color = "red";
                showOutputMessage("The loss is ₹ " + loss + ". The loss percentage is " + lossPer + "% 😔");
                document.getElementById('loss').style.display = "block";
            }, 5000)

        } else if (Number(initialStockPrice.value) > Number(currentStockPrice.value)) {
            var profit = initialCost - currentCost;
            var profitPer = ((profit / initialCost) * 100).toFixed(2);
            document.getElementById('loading').style.display = "block";
            setTimeout(function() {
                document.getElementById('loading').style.display = "none";
                output.style.color = "green";
                showOutputMessage("The profit is ₹ " + profit + ". The profit percentage is " + profitPer + "% 🤑🥳");
                document.getElementById('profit').style.display = "block";
            }, 5000)



        }
    } else {
        showOutputMessage("Please Give Inputs");
    }
})