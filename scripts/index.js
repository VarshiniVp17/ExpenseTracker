document.addEventListener("DOMContentLoaded", () => {
  const expense_form = document.getElementById("expense-form");
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;

  expense_form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (amount.value === "" || category.value === "" || date.value === "") {
      alert("Please fill in all fields");
    }

    const expense = {
      id: Date.now(),
      amount,
      category,
      date,
    };

    saveExpense(expense);

    expense_form.reset();
  });
});

function saveExpense(expense) {
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  addExpenseToTable(expense);
}

function loadExpenses() {
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  expenses.forEach((expense) => {
    addExpenseToTable(expense);
  });
}

function addExpenseToTable(expense) {
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.filter((expense) => {
    expense.id !== expense.id;
  });
  localStorage.setItem("expenses", JSON.stringify(expenses));
}
