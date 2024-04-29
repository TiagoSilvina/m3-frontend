import { useState } from "react";
import { useNavigate } from "react-router-dom";
import transactionsService from "../services/transactions.service";
import { Link } from "react-router-dom";

function AddTransactionPage() {
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState(new Date());
  const [receipt, setReceipt] = useState("");

  // Initialize Navigate
  const navigate = useNavigate();

  const { createTransaction } = transactionsService;

  function handleSubmit(e) {
    e.preventDefault();

    const transaction =
     {text,
      type,
      category,
      description,
      amount,
      date,
      receipt};

    createTransaction(transaction)
    .then(() => navigate("/transactions"))
    .catch((error) => console.log(error));
  }
  return (
    <div className="add-page">
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
      <option>-----</option>
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
      <option>-----</option>
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
      <button className="add-btn" type="submit">Add transaction</button>
      </div>
      </form>
          <Link className="del-btn" to="/transactions">Back</Link>
    </div>
    </div>
  )
}

export default AddTransactionPage;