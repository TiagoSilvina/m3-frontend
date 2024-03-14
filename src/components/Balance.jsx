import { useEffect, useState, useContext } from "react";
import transactionsService from "../services/transactions.service";
import IncomeExpenses from "./IncomeExpenses";

function Balance() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
      transactionsService
        .getAllTransactions()
        .then((response) => setTransactions(response.data))
        .catch((error) => console.log(error));
    }, []);
    
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ); 

  let color = total > 0 ? "money-plus" : "money-minus"

  return (
    <div>
        <div className="inc-exp-container">
        <div>
        <h4>Expense</h4>
        <p className="money-minus">{expense}€</p>
        </div>
        <div>
        <h4>Income</h4>
        <p className="money-plus">{income}€</p>
        </div>
        <div>
        <h4>Balance</h4>
        <p className={color}>{total}€</p>
        </div>
      </div>
    </div>
  )
}

export default Balance;