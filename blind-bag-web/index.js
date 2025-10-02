// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRoutes = require('./backend/routes/ProductRoutes'); // import routes Product
const db = require('./database'); // database.js nằm ở root

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
