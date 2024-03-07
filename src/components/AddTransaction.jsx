import React from 'react'
import { useState } from 'react'
/*import { useNavigate } from "react-router-dom";*/
import axios from "axios";


function AddTransaction() {

const [text, setText] = useState("");
const [amount, setAmount] = useState(0);
/* const navigate = useNavigate(); */

  function handleSubmit(e) {
    e.preventDefault();

    const transaction = { text, amount };

/*     axios
      .post("/api/transaction", transaction)
      .then(() => navigate("/transactions"))
      .catch((error) => console.log(error)); */
  }

  return (
    <div>
       <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input type="text" placeholder="Enter text..." 
          onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label>Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" placeholder="Enter amount..." 
          onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form> 
    </div>
  )
}

export default AddTransaction