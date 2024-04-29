import { useEffect, useState, useContext } from "react";
import transactionsService from "../services/transactions.service";
import { Link } from "react-router-dom";


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

  let color = total > 0 ? "positive" : "negative"

  return (
        <div className="balance">
          <div className="balance-data">
        <div className="balance-container">
        <h4>Expense</h4>
        <p className="negative">-{expense}€</p>
        </div>
        <div className="balance-container">
        <h4>Income</h4>
        <p className="positive">{income}€</p>
        </div>
        <div className="balance-container">
        <h4>Balance</h4>
        <p className={color}>{total}€</p>
        </div>
        </div>
        <div className="add-transaction">
            <Link className="balance-btn" to="/add-transaction">
            Add Transaction
            </Link>
        </div>
      </div>
 
  )
}

export default Balance;