import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import transactionsService from "../services/transactions.service";
/* import { AuthContext } from "../context/auth.context"; */

function TransactionCard() {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
      transactionsService
        .getAllTransactions()
        .then((response) => setTransactions(response.data))
        .catch((error) => console.log(error));
    }, []);


    /* const{transactions} = useContext(AuthContext) */ 

  return (
    <div> 
      {transactions &&
        transactions.map((transaction) => {
          return (
            <div key={transaction._id} >
              <Link to={`/transactions/${transaction._id}`}>
                <h3>{transaction.text}</h3>
                <p>{transaction.description}</p>
                <p>{transaction.amount} €</p>
                <p>{transaction.date}</p>
              </Link>
              <Link to={`/edit-transaction/${transaction._id}`}>
                <p>Edit transaction</p>
              </Link>
            </div>
          );
        })}
    </div>
  )
}

export default TransactionCard;