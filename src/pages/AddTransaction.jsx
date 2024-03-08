/* Import React / React-Router-Dom Features  */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import transactionsService from "../services/transactions.service";

function AddTransactionPage() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // Initialize Navigate
  const navigate = useNavigate();

  const { createTransaction } = transactionsService;

  function handleSubmit(e) {
    e.preventDefault();

    const transaction = { text, amount};

    createTransaction(transaction)
    .then(() => navigate("/transactions"))
    .catch((error) => console.log(error));
  }
  return (
    <div>
       <h3>Add new transaction</h3>
       <form onSubmit={handleSubmit}>
      <label>name</label>
      <input
        value={text}
        type="text"
        required
        onChange={(e) => setText(e.target.value)}
      />
      <label>Amount</label>
      <input
        value={amount}
        type="number"
        required
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add transaction</button>
    </form>
    </div>
  )
}

export default AddTransactionPage;