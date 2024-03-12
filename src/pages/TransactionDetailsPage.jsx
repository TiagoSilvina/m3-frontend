import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Balance from '../components/Balance';


import transactionsService from "../services/transactions.service";


function TransactionDetailsPage() {
  const [transaction, setTransaction] = useState({});
  const { id } = useParams();

  const { getTransaction } = transactionsService;
  
  useEffect(() => {
    getTransaction(id)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.log(error));
  }, [id]);


  return (
    <div>
      <Balance/>
        {transaction && (
        <div>
          <Link to="/">Return to Home Page</Link>
          <h3>{transaction.text}</h3>
          <p>{transaction.amount}</p>
          <p>{transaction.date}</p>
          <p>{transaction.type}</p>
          <p>{transaction.description}</p>
          <p>{transaction.category}</p>
          <div className="receipt" >
            <img src={transaction.img} alt="picture of receipt"/>
          </div>
          <Link to="/transactions">Back</Link>
        </div>
      )}
    </div>
  )
}

export default TransactionDetailsPage;