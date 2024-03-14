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
import About from './pages/About';
import Navbar from './components/Navbar';

import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<IsAnon><Signup /></IsAnon>}/>
        <Route path="/login" element={<IsAnon><Login /></IsAnon>}/>
        <Route path="/transactions" element={<IsPrivate><TransactionListPage /></IsPrivate>} />
        <Route path="/transactions/:id" element={<IsPrivate><TransactionDetailsPage /></IsPrivate>} />
        <Route path="/edit-transaction/:id" element={<IsPrivate><TransactionEditPage /></IsPrivate>} />
        <Route path="/add-transaction" element={<IsPrivate><AddTransactionPage /></IsPrivate>} />
        <Route path="*" element={<IsAnon><Error /></IsAnon>} />
      </Routes>
      </div>
  )
}

export default App
