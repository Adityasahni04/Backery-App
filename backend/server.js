const express = require('express');
const bodyparser = require('body-parser');
const { Pool } = require('pg'); 
const cors=require('cors');// Make sure to import Pool from 'pg'
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
const PORT = 8000;

const pool = new Pool({
  host: process.env.DB_HOST, // This should be 'db' (container name)
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT),
});
// Test the connection to the database
pool.connect()
  .then(() => {
    console.log('Connected to the PostgreSQL database successfully');
  })
  .catch((error) => {``
    console.error('Error connecting to the database:', error);
  });

  app.post('/addproduct', async (req, res) => {
    const { name, category, price, stock, image } = req.body;
  
    // Validate required fields
    if (!name || !price || stock === undefined) {
      return res.status(400).json({ message: "Missing required fields: name, price, or stock" });
    }
  
    try {
      const insertQuery = `
        INSERT INTO products (name, category, price, stock, image)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
  
      const result = await pool.query(insertQuery, [name, category, price, stock, image]);
  
      res.status(201).json(result.rows[0]); // Send back the inserted product
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ message: "Error adding product" });
    }
  });
  
  app.put('/updateproduct/:id', async (req, res) => {
    const { id } = req.params;
    const { name, category, price, stock, image } = req.body;
  
    // Validate required fields
    if (!name || !price || stock === undefined) {
      return res.status(400).json({ message: "Missing required fields: name, price, or stock" });
    }
  
    try {
      const updateQuery = `
        UPDATE products
        SET name = $1, category = $2, price = $3, stock = $4, image = $5
        WHERE id = $6
        RETURNING *;
      `;
  
      const result = await pool.query(updateQuery, [name, category, price, stock, image, id]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json(result.rows[0]); // Return the updated product
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Error updating product" });
    }
  });
  
  app.delete('/deleteproduct/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleteQuery = `
        DELETE FROM products
        WHERE id = $1
        RETURNING *;
      `;
  
      const result = await pool.query(deleteQuery, [id]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product deleted successfully", product: result.rows[0] });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: "Error deleting product" });
    }
  });
  
app.get('/listproducts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows); // Send the products as JSON
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
});
