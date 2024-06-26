import React from 'react';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import Balance from '../components/Balance';
import transactionsService from "../services/transactions.service";

function TransactionEditPage() {
    const [text, setText] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [receipt, setReceipt] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    const { getTransaction, updateTransaction, deleteTransaction } = transactionsService;


// Get ////////////////////////////////////////////////////////////

useEffect(() => {
  getTransaction(id)
    .then((response) => {
      setText(response.data.text);
      setType(response.data.type);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setAmount(response.data.amount);
      setDate(response.data.date);
      setReceipt(response.data.receipt);
    })
    .catch((error) => console.log(error));
}, [id]);

// Update ////////////////////////////////////////////////////////////
  
const handleSubmit = (e) => {
  e.preventDefault();

  const updatedTransaction =
    {text,
      amount,
      date,
      type,
      description,
      category,
      receipt};

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
    <div className="page">
      <div className="balance-box">
      <Balance/>
      </div>
      <div className="edit-page">
      <div className="form-container">
      <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-element">
      <label className="form-label">Name</label>
      <input
      className="form-input"
      value={text} 
      name="text"
      type="text"
      required
      placeholder="Enter name..."
      onChange={(e) => setText(e.target.value)}
      />
      </div>

      <div className="form-element">
     <label className="form-label">Expense</label>
      <input 
      value="Expense"
      name="type" 
      type="radio" 
      onChange={(e) => setType(e.target.value)}
      ></input>
      <label className="form-label">Income</label> 
      <input 
      value="Income"
      name="type" 
      type="radio" 
      onChange={(e) => setType(e.target.value)}
      ></input>
      </div>

      <div className="form-element-select">
      {type === "Expense" && (
      <label className="form-label">

      <select
      className="form-input"
      value={category}
      name="category"
      type="text"
      onChange={(e) => setCategory(e.target.value)} >
      <option disabled selected>-----</option>
      <option value="Other">Other</option>
      <option value="Debt Payments">Debt Payments</option>
      <option value="Education">Education</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Food">Food</option>
      <option value="Healthcare">Healthcare</option>
      <option value="Housing">Housing</option>
      <option value="Insurance">Insurance</option>
      <option value="Transportation">Transportation</option>
      </select>
      </label>
      )}
      </div>

      <div className="form-element">
      {type === "Income" && (
      <label className="form-label">
     
      <select
      className="form-input"

      value={category}
      name="category"
      type="text"
      onChange={(e) => setCategory(e.target.value)}>
      <option disabled selected>-----</option>
      <option value="Paycheck" >Paycheck</option>
      <option value="Investments">Investments</option>
      <option value="Other">Other</option>
      </select>
      </label>)}
      </div>

      <div className="form-element">
      <label className="form-label">Description</label>
      <input
      className="form-input"
      value={description}
      name="description"
      type="text"
      placeholder="Enter description..."
      onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      
      <div className="form-element">
      <label className="form-label">Amount (- for expenses)</label>
      <input
      className="form-input"
      value={amount}
      name="amount"
      type="number"
      required
      placeholder="Enter amount..."
      onChange={(e) => setAmount(e.target.value)}
      />
      </div>

      <div className="form-element">
      <label className="form-label">Date</label>
      <input
      className="form-input"
      /* className="input input-bordered w-full max-w-xs" */
      value={date}
      name="date"
      type="date"
      onChange={(e) => setDate(e.target.value)}
      />
      </div>

      <div className="form-element">
      <label className="form-label">Add Receipt</label>
      <input
      className="form-input"
      value={receipt}
      name="receipt"
      type="text"
      placeholder="url of receipt (optional)"
      onChange={(e) => setReceipt(e.target.value)}
      />
      </div>
      <div className="btn-bg">
      <button className="edit-btn" type="submit">Edit transaction</button>
      </div>
      </form>
        <button className="del-btn" onClick={handleDelete} >Delete</button>
        <Link className="form-element-btn" to="/transactions">Back</Link>
        </div> 
    </div>
    </div>
  )
}


export default TransactionEditPage;