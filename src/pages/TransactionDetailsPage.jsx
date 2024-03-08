import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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
        {transaction && (
        <div>
          <h3>{transaction.text}</h3>
          <p>{transaction.amount}</p>
          <Link to="/transactions">Back</Link>
        </div>
      )}
    </div>
  )
}

export default TransactionDetailsPage;