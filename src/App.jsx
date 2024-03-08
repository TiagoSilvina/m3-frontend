import { Routes, Route } from 'react-router-dom';
import './App.css'

// Import Pages //////////////////////////////////////////////////
import Home from "./pages/Home";
import Error from './pages/Error';
import Signup from './pages/Signup';
import Login from "./pages/Login";
import TransactionListPage from './pages/TransactionListPage';
import TransactionDetailsPage from './pages/TransactionDetailsPage';
import TransactionEditPage from './pages/TransactionEditPage';
import AddTransactionPage from './pages/AddTransaction';


function App() {

  return (
    <div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/transactions" element={<TransactionListPage />} />
        <Route path="/transactions/:id" element={<TransactionDetailsPage />} />
        <Route path="/edit-transaction/:id" element={<TransactionEditPage />} />
        <Route path="/add-transaction" element={<AddTransactionPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
  )
}

export default App
