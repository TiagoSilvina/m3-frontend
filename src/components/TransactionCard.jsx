import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import transactionsService from "../services/transactions.service";
/* import { AuthContext } from "../context/auth.context"; */

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import 'daisyui/dist/full.css'; // Import DaisyUI styles

function TransactionCard() {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
      transactionsService
        .getAllTransactions()
        .then((response) => setTransactions(response.data))
        .catch((error) => console.log(error));
    }, []);

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    };
   
  return (
    <div>
      {transactions &&
      transactions
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((transaction) => {
          return (
            <div key={transaction._id} className="transaction-card">
              <Link to={`/transactions/${transaction._id}`}>
                <div>
                <h3>{transaction.text}</h3>
                <p>{transaction.category}</p>
                {/* <p>{transaction.description}</p> */}
                <p className={transaction.amount >0 ? "money-plus": "money-minus"}> {transaction.amount} €</p>
                {/* <p>{formatDate(transaction.date)}</p> */}
                {/* <img src={switch (transaction.)}/> */}
                </div>
              </Link>
              <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              <Link to={`/edit-transaction/${transaction._id}`}>
              <p className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Edit transaction</p>
              </Link>
              </div>
            </div>
          );
        })}
    </div>
  )
}

export default TransactionCard;