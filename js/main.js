const ethButton = document.getElementById("ethButton");
const usdtButton = document.getElementById("usdtButton");
const balanceInfo = document.getElementById("balanceInfo");
const rateInfo = document.getElementById("rateInfo");

ethButton.addEventListener("click", () => {
  balanceInfo.textContent = "ETH Balance: 0 ETH";
  rateInfo.textContent = "1 TOKEN = 0.000005 ETH";
});

usdtButton.addEventListener("click", () => {
  balanceInfo.textContent = "USDT Balance: 0 USDT";
  rateInfo.textContent = "1 TOKEN = 0.0005 USDT";
});

const payLabel = document.getElementById("payLabel");
const receiveLabel = document.getElementById("receiveLabel");

ethButton.addEventListener("click", () => {
  payLabel.textContent = "Pay with ETH";
  receiveLabel.textContent = "Receive TOKEN ";
});

usdtButton.addEventListener("click", () => {
  payLabel.textContent = "Pay with USDT";
  receiveLabel.textContent = "Receive TOKEN ";
});
function setActive(clickedButton) {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.classList.remove("btn-green");
    button.classList.add("btn-dark");
  });

  clickedButton.classList.remove("btn-dark");
  clickedButton.classList.add("btn-green");
}
