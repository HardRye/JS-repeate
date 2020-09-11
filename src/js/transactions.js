import transactionHistory from "./transaction-history.js";
// console.log(transactionHistory);

function createTableRowMarkup({ type, amount, date, business }) {
  const row = `
  <tr>
    <td>${type}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
  </tr>
  `;

  return row;
}

function createTableRows(transactions) {
  // return transactions.map((el) => createTableRowMarkup(el)).join();

  return transactions.reduce((acc, el) => acc + createTableRowMarkup(el), "");
}

// console.log(createTableRows(transactionHistory));
const markup = createTableRows(transactionHistory);

const table = document.querySelector(".transaction-table");

table.insertAdjacentHTML("beforeend", markup);
