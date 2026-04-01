# 🚀 Inventory Search API (Backend)

This is a simple backend service that provides an API to search and filter inventory items based on different parameters.

---

## 📌 Features

* Search by product name (case-insensitive)
* Filter by category
* Filter by price range (min & max)
* Combine multiple filters together
* Handles invalid inputs and edge cases

---

## 🛠️ Tech Stack

* Node.js
* Express.js

---

## 📁 Project Structure

```
src/
 ├── config/
 │    └── db.js
 ├── controllers/
 │    └── search.controller.js
 ├── routes/
 │    └── search.routes.js
 ├── data/
 │    └── inventory.data.js
 ├── server.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/dharmikpuri/ZeroStock_Assignment_Backend_Part_A
```

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Run the Server

```
npm run server
```

Server will start at:

```
http://localhost:5000
```

---

## 🔍 API Endpoint

### GET `/api/search`

This endpoint returns inventory items based on filters.

---

## 🔹 Query Parameters

| Parameter | Description                  |
| --------- | ---------------------------- |
| q         | Product name (partial match) |
| category  | Filter by category           |
| minPrice  | Minimum price                |
| maxPrice  | Maximum price                |

---

## 🔹 Example Requests

```
/api/search
/api/search?q=iphone
/api/search?category=electronics
/api/search?minPrice=5000&maxPrice=20000
/api/search?q=table&category=furniture
```

---

## 🧠 Search Logic

* Inventory data is stored in an in-memory array
* Filters are applied step-by-step:

  * Product name → using case-insensitive matching
  * Category → exact match (case-insensitive)
  * Price → range filtering using minPrice and maxPrice
* All filters can be combined

---

## ⚠️ Edge Cases Handled

* Invalid price range (minPrice > maxPrice)
* Empty query → returns all items
* No matching results → returns empty array

---

## ⚡ Possible Improvements

For larger datasets:

* Move data to a database (PostgreSQL / MongoDB)
* Add indexing on searchable fields
* Implement pagination
* Use caching (Redis)
* Integrate full-text search (Elasticsearch)

---

## 💡 Notes

* Current implementation uses in-memory data for simplicity
* Structure is kept modular for easy scaling

---
