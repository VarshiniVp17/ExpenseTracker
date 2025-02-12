//Will Implement once JS DOM is Loaded
const expenseTableBody = document.querySelector("tbody");

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

    console.log(expense);
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
  const row = document.createElement("tr");
  row.innerHTML = `<td>${expense.amount}</td>
  <td>${expense.category}</td>
  <td>${expense.date}</td>
  <td><button class="delete">Delete</button></td>`;

  expenseTableBody.appendChild(row);
}
