import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Balance from '../components/Balance';

import transactionsService from "../services/transactions.service";

function TransactionDetailsPage() {
  const [transaction, setTransaction] = useState({});
  const { id } = useParams();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const { getTransaction } = transactionsService;
  
  useEffect(() => {
    getTransaction(id)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="page">
      <div className="balance-box">
      <Balance/>
      </div>
      <div className="transactions">
        {transaction && (<div className="transaction-card">
        <div className="">
          <div className="transaction-details">
          <h3 className={transaction.amount >0 ? "positive": "negative"}>{transaction.text}</h3>
          <p>{transaction.type}</p>
          <p>{transaction.category}</p>
          <p>{transaction.description}</p>
          <p className={transaction.amount >0 ? "positive": "negative"}>{transaction.amount} €</p>
          <p>{formatDate(transaction.date)}</p>
          </div>
          <Link className="back-btn" to="/transactions">Back</Link>
         
          <div className="receipt" >
            <img  className="receipt-img" src={transaction.receipt} alt="picture of receipt"
            style={{ display: transaction.receipt ? 'inline-block' : 'none' }}/>
          </div>
        </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default TransactionDetailsPage;