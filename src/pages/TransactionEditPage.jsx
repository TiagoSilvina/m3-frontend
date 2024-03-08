import React from 'react';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import transactionsService from "../services/transactions.service";

function TransactionEditPage() {
    const [transaction, setTransaction] = useState({});
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    const { getTransaction, updateTransaction, deleteTransaction } = transactionsService;


// Get ////////////////////////////////////////////////////////////

useEffect(() => {
  getTransaction(id)
    .then((response) => {
      setName(response.data.text);
      setDescription(response.data.amount);
    })
    .catch((error) => console.log(error));
}, [id]);

// Update ////////////////////////////////////////////////////////////
  
const handleSubmit = (e) => {
  e.preventDefault();

  const updatedTransaction = { text, amount };

  updateTransaction(id, updatedTransaction)
    .then(() => {
      navigate("/transactions");
    })
    .catch((error) => {
      console.log(error);
    });
};
    
// Delete ////////////////////////////////////////////////////////////

const handleDelete = () => {
  deleteTransaction(id)
    .then(() => {
      navigate("/transactions");
    })
    .catch((error) => console.log(error));
};


  return(
    <div>
      <h3>Edit transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Description</label>
          <input type="text" placeholder="Enter description..." 
          onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label>Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" placeholder="Enter amount..." 
          onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Edit transaction</button>
      </form>
        <button className="btn"
        onClick={handleDelete} >x</button>
    </div>
  )
}


export default TransactionEditPage;