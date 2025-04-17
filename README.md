# 🍰 Bakery Management System

A modern solution for bakery inventory management with a microservices architecture.

## 🔍 System Overview

The Bakery Management System helps bakery owners track and manage their inventory with ease. Admins can add, update, delete, and monitor stock levels of bakery items through a clean React interface backed by a powerful Node.js API.

## 🏗️ System Architecture

```
┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │
│  React Frontend │◄────►│  Node.js API    │
│                 │      │                 │
└─────────────────┘      └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │                 │
                         │   RabbitMQ      │
                         │                 │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │                 │
                         │   PostgreSQL    │
                         │                 │
                         └─────────────────┘
```

- **Frontend**: React.js for user interface
- **Backend**: Node.js with Express for business logic and API
- **Database**: PostgreSQL for persistent storage
- **Message Queue**: RabbitMQ for service communication
- **Logging**: Morgan for comprehensive request logging
- **Containerization**: Docker and Docker Compose for microservices

## 🚀 Setup Instructions

Getting started is simple with our Docker setup:

1. **Clone the repository**
   ```bash
   https://github.com/Adityasahni04/Bakery-App.git
   cd Bakery-App
   ```

2. **Launch everything with a single command**
   ```bash
   docker-compose up
   ```

3. **Access the application**
   ```
   http://localhost:3000
   ```

That's it! The entire system will be up and running with all services communicating properly.

## 📚 API Documentation

### Endpoints

#### GET /listproducts
Returns all bakery items in the inventory

**Response Example:**
```json
[
  {
    "id": "1",
    "name": "Chocolate Cake",
    "price": 24.99,
    "quantity": 15,
    "category": "Cake"
  },
  {
    "id": "2",
    "name": "Sourdough Bread",
    "price": 5.99,
    "quantity": 30,
    "category": "Bread"
  }
]
```

#### POST /addproduct
Adds a new bakery item to inventory

**Request Body:**
```json
{
  "name": "Blueberry Muffin",
  "price": 3.49,
  "quantity": 24,
  "category": "Pastry"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Product added successfully",
  "productId": "3"
}
```

#### PUT /updateproduct/:id
Updates an existing bakery item

**Request Body:**
```json
{
  "name": "Blueberry Muffin",
  "price": 3.99,
  "quantity": 20,
  "category": "Pastry"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Product updated successfully",
  "product": {
    "id": "3",
    "name": "Blueberry Muffin",
    "price": 3.99,
    "quantity": 20,
    "category": "Pastry"
  }
}
```

#### DELETE /deleteproduct/:id
Removes a bakery item from inventory

**Response:**
```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

## ✨ Features

- **Real-time Inventory Updates**: Instantly reflects stock changes
- **Microservices Architecture**: Each component runs in its own container
- **Automated Setup**: One command to launch the entire system
- **RESTful API**: Clean endpoints for all CRUD operations
- **Persistent Storage**: PostgreSQL database maintains inventory state

## 🛠️ Technology Stack

- React
- Node.js
- PostgreSQL
- RabbitMQ
- Docker
- Morgan (logging)

## 🤝 Contributing

Contributions welcome! Please fork the repository and submit a pull request.

## 📄 License

This project is licensed under the MIT License.
