/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import transactionsService from "../services/transactions.service";

// Initializing Context
const AuthContext = React.createContext();

const API_URL = "http://localhost:5005";

function AuthProviderWrapper(props) {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 /*  const [transactions, setTransactions] = useState([]); */


  /* Save the Login's JWT Token in our Browser' Storage */
  const saveToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  /* Function that authenticates the user --> verifies if the token is a valid one. */
  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          setUser(response.data);
          setIsLoggedIn(true);
        })
        .catch(()=>{
          setUser(null);
          setIsLoggedIn(false);
        })
    }
    else {
        setUser(null);
        setIsLoggedIn(false);
    }
  };

  const removeToken = () =>{
    localStorage.removeItem("authToken");
  }

  const logOut = () =>{
    removeToken();
    authenticateUser();
  }

   useEffect(() => {
     authenticateUser();
   }, []);

    
   /* useEffect(() => {
     transactionsService
     .getAllTransactions()
     .then((response) => setTransactions(response.data))
     .catch((error) => console.log(error));
    }, []);
    
// IncomeExpenses //////////////////////////////////////////////////
const amounts = transactions.map(transaction => transaction.amount);

const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0);

const expense = (
  amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
  -1);

// Balance //////////////////////////////////////////////////
      const total = amounts.reduce((acc, item) => (acc += item), 0); */

  return(
    <AuthContext.Provider value={
    {/* transactions,income, expense, total, */
     isLoggedIn, user, saveToken, authenticateUser, logOut}}>
        {props.children}
    </AuthContext.Provider>
  )
}


export {AuthProviderWrapper, AuthContext};