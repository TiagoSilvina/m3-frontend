/* Import React / React-Router-Dom Features  */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import transactionsService from "../services/transactions.service";

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
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>

      <div className="input input-bordered flex items-center gap-2">
      <label>name</label>
      <input
      value={text}
      name="text"
      type="text"
      required
      placeholder="Enter name..."
      onChange={(e) => setText(e.target.value)}
      />
      </div>



      <div className="form-control">
        <label className="label cursor-pointer">
        <span className="label-text">Expense</span>
        <input 
        className="radio checked:bg-red-500" checked
        value="expense"
        name="type" 
        type="radio" 
        onChange={(e) => setType(e.target.value)}
        ></input>
        </label>
        </div>
        <div className="form-control">
        <label className="label cursor-pointer">
        <span className="label-text">Income</span> 
        <input 
        className="radio checked:bg-green-500" checked
        value="income"
        name="type" 
        type="radio" 
        onChange={(e) => setType(e.target.value)}
        ></input>
        </label>
        </div>



        <div className="flex items-center gap-2">
        {type === "expense" && (
        <label>
        Category:
        <select className="select select-bordered w-full max-w-xs"
        value={category}
        name="category"
        type="text"
        onChange={(e) => setCategory(e.target.value)} >
        <option disabled selected value="">----</option>
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

        <div className="flex items-center gap-2">
        {type === "income" && (
        <label>
        Category:
        <select className="select select-bordered w-full max-w-xs"
        value={category}
        name="category"
        type="text"
        onChange={(e) => setCategory(e.target.value)}>
        <option disabled selected value="">----</option>
        <option value="Paycheck" >Paycheck</option>
        <option value="Investments">Investments</option>
        <option value="Other">Other</option>
        </select>
        </label>)}
        </div>

      <div className="input input-bordered flex items-center gap-2">
      <label>Description</label>
      <input
      value={description}
      name="description"
      type="text"
      placeholder="Enter description..."
      onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      
      <div className="input input-bordered flex items-center gap-2">
      <label>Amount (- for expenses)</label>
      <input
      value={amount}
      name="amount"
      type="number"
      required
      placeholder="Enter amount..."
      onChange={(e) => setAmount(e.target.value)}
      />
      </div>

      <div className="input input-bordered flex items-center gap-2">
      <label>Date</label>
      <input
      value={date}
      name="date"
      type="date"
      onChange={(e) => setDate(e.target.value)}
      />
      </div> 

      <div className="input input-bordered flex items-center gap-2">
      <label>Add Receipt</label>
      <input
      value={receipt}
      name="receipt"
      type="text"
      placeholder="url of receipt (optional)"
      onChange={(e) => setReceipt(e.target.value)}
      />
      </div> 

      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" type="submit">Add transaction</button>
      </form>   
    </div>
  )
}

export default AddTransactionPage;