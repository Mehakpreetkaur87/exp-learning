# 🚀 Express Backend Server + Middleware + Git Setup

---

## 📌 Project Overview

This project demonstrates a **basic backend server built using Express.js** along with core backend concepts.

It covers:

* Routing
* Request & Response cycle
* HTTP methods (GET vs POST)
* Middleware (`express.json()`)
* Git & GitHub workflow

---

## 🧠 What You Will Learn

* How backend works internally
* How Express simplifies server creation
* How middleware controls request flow
* Difference between GET and POST
* How data flows from client → server → response

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* Git
* GitHub

---

## 📁 Project Structure

```bash
project/
│── app.js
│── routers/
│   └── route.js
│── package.json
│── .gitignore
```

---

## 🏗️ Backend Architecture (Basic)

```text
Client (Browser / Postman)
        ↓
Request
        ↓
Express Server
        ↓
Middleware
        ↓
Route Handler
        ↓
Response
```

---

## 🔧 Server Setup

```js
const express = require('express')
const app = express()
const port = 3000
```

* `express()` → creates server
* `app` → server instance
* `port` → communication endpoint

---

## 🔗 Routing

```js
app.get('/', (req, res) => {
    res.send("Hello")
})
```

### Explanation:

* `app.get()` → handles GET request
* `'/'` → root route
* `req` → request object
* `res` → response object

---

## 📥 Request & Response

* **req (Request)**
  → data from client (body, params, query)

* **res (Response)**
  → data sent back to client

---

## ⚠️ req.body Issue (Important Learning)

### ❌ Problem

```js
console.log(req.body) // undefined
```

### 🔍 Why?

* GET request does not send body
* Express does not parse JSON by default

---

## ✅ Solution: Middleware

```js
app.use(express.json())
```

### Purpose:

* Parses JSON data
* Converts to JavaScript object
* Makes it available in `req.body`

---

## 🔁 Correct Way to Send Data

```js
app.post('/', (req, res) => {
    console.log(req.body)
    res.send("Data received")
})
```

---

## 🔄 Middleware Concept

### 📌 Definition

Middleware = function that runs **before route handler**

---

### 📌 Flow

```text
Request
  ↓
Logging Middleware
  ↓
Authentication Middleware
  ↓
Validation Middleware
  ↓
Route Handler
  ↓
Response
```

---

### 📌 Example

```js
app.use((req, res, next) => {
    console.log("Logging")
    next()
})
```

---

### ⚠️ Important Rule

* `next()` → moves to next step
* Without `next()` → request stops

---

## 🔐 Middleware Types Implemented

* Logging → logs incoming requests
* Authentication → checks user
* Validation → validates data

---

## 🔄 Complete Request Flow

```text
Client
  ↓
express.json()
  ↓
Logging Middleware
  ↓
Authentication Middleware
  ↓
Validation Middleware
  ↓
Route Handler
  ↓
Response
```

---

## 🧪 Testing

Tools used:

* Thunder Client
* Postman

---

## 📚 Key Concepts

* Server → handles requests
* Route → endpoint
* Middleware → processing layer
* Request → incoming data
* Response → outgoing data
* HTTP → communication protocol

---

## 🔗 HTTP Methods

| Method | Purpose     |
| ------ | ----------- |
| GET    | Fetch data  |
| POST   | Send data   |
| PUT    | Update data |
| DELETE | Delete data |

---

## 🔧 Git Workflow

```bash
git init
git add .
git commit -m "message"
git push
```

---

## 📂 .gitignore

```bash
node_modules/
.env
```

---

## ▶️ How to Run

```bash
npm install
node app.js
```

Open in browser:

```
http://localhost:3000/
```

---

## 🎯 Current Status

* ✅ Express server created
* ✅ Routing implemented
* ✅ Middleware working
* ✅ Request/Response understood
* ✅ GitHub integration done

---

## 🚀 What to Continue Next

### 🔹 Routing Advanced

* `req.params`
* `req.query`
* Dynamic routes

---

### 🔹 Middleware Deep Dive

* Route-specific middleware
* Error handling middleware
* Middleware chaining

---

### 🔹 Backend Structure

* Controllers
* Route separation
* MVC architecture

---

### 🔹 Database Integration

* MongoDB
* Mongoose (ODM)
* CRUD operations

---

### 🔹 API Development

* REST APIs
* Status codes
* JSON responses

---

### 🔹 Authentication

* JWT (JSON Web Token)
* Login & Signup

---

### 🔹 Real Projects

* User API
* Blog backend
* E-commerce backend

---

## 💡 Final Understanding

* You built a backend server
* You understand request flow
* You implemented middleware
* You solved real issue (`req.body`)
* You practiced Git workflow

---
