const loanAmoutInput = document.getElementById("la-input");
const interestInput = document.getElementById("ir-input");
const months = document.getElementById("mtp-input");
const monthlyPay = document.getElementById("mp-input");

loanAmoutInput.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (
      loanAmoutInput.value !== "" &&
      interestInput.value !== "" &&
      months.value !== ""
    ) {
      calculateAmount();
    } else {
      alert("You must have to fill all the input field");
    }
  }
});

interestInput.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (
      loanAmoutInput.value !== "" &&
      interestInput.value !== "" &&
      months.value !== ""
    ) {
      calculateAmount();
    } else {
      alert("You must have to fill all the input field");
    }
  }
});

months.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (
      loanAmoutInput.value !== "" &&
      interestInput.value !== "" &&
      months.value !== ""
    ) {
      calculateAmount();
    } else {
      alert("You must have to fill all the input field");
    }
  }
});

function calculateAmount() {
  const interestAmount = (loanAmoutInput.value / 100) * interestInput.value;
  const totalAmount = (+interestAmount + +loanAmoutInput.value).toFixed(2);

  const perMonthPay = totalAmount / months.value;

  monthlyPay.value = perMonthPay;
}
