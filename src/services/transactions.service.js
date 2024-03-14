import axios from "axios";

class TransactionsService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_SERVER_URL || "https://m3-backend.onrender.com"/* "http://localhost:5005" */
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/transactions
  createTransaction = (requestBody) => {
    return this.api.post("/transactions", requestBody);
  };

  // GET /api/transactions
  getAllTransactions = () => {
    return this.api.get("/transactions");
  };

  // GET /api/transactions/:id
  getTransaction = (id) => {
    return this.api.get(`/transactions/${id}`);
  };

  // PUT /api/transactions/:id
  updateTransaction = (id, requestBody) => {
    return this.api.put(`/transactions/${id}`, requestBody);
  };

  // DELETE /api/transactions/:id
  deleteTransaction = (id) => {
    return this.api.delete(`/transactions/${id}`);
  };
}

// Create one instance object
const transactionsService = new TransactionsService();

export default transactionsService;
