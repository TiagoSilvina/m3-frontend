import { useEffect, useState } from "react";
import transactionsService from "../services/transactions.service";


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

  let color = total > 0 ? "money-plus" : "money-minus"

  return (
    <div>
    <h2>Balance</h2>
    <h3 className={color}>{total}€</h3>
    </div>
  )
}

export default Balance;