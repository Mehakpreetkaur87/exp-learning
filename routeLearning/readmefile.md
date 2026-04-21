# 🚀 Express Basic Server + Git Setup

## 📌 Project Overview

This project demonstrates a **basic Express.js server setup** and understanding of:

* Routing
* Request & Response cycle
* HTTP methods (GET vs POST)
* Middleware (`express.json()`)
* Git & GitHub workflow

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* Git
* GitHub

---

## 🧱 What is Implemented

### 1️⃣ Basic Server Setup

* Created Express app using:

```js
const express = require('express')
const app = express()
```

* Server runs on:

```js
const port = 3000
```

---

### 2️⃣ Route Handling

* Implemented a **GET route**:

```js
app.get('/', (req, res) => {
    res.send("Hello")
})
```

👉 When user hits:

```
http://localhost:3000/
```

👉 Output:

```
Hello
```

---

### 3️⃣ Understanding Request & Response

* `req` → incoming data from client
* `res` → outgoing response to client

---

### 4️⃣ req.body Issue (Important Learning)

#### ❌ Problem

```js
console.log(req.body) // undefined
```

#### 🔍 Reason

* GET request does not send body
* Express does not parse body by default

---

### 5️⃣ Middleware Introduction

#### ✅ Added:

```js
app.use(express.json())
```

👉 Purpose:

* Parses JSON data
* Makes data available in `req.body`

---

### 6️⃣ Correct Way to Send Data

#### Use POST instead of GET:

```js
app.post('/', (req, res) => {
    console.log(req.body)
    res.send("Data received")
})
```

---

## 🔄 Request Flow

```
Client → Request → Server → Route Match → Response → Client
```

---

## 🧪 Testing Tool

Used API testing tools like:

* Thunder Client / Postman

---

## 🧠 Key Learnings

* Express simplifies backend development
* Routes handle HTTP requests
* GET vs POST difference is important
* Middleware is required to read request body
* `req.body` works only with proper setup

---

## 🔧 Git Workflow Used

```bash
git init
git add .
git commit -m "message"
git push
```

### 📌 Practice Followed

* Small commits after each step
* Meaningful commit messages

---

## 📂 .gitignore

```
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

✅ Basic Express server working
✅ Routing implemented
✅ Middleware understanding started
✅ GitHub integration done

---

## 🚀 Next Steps

* Learn `req.params` & `req.query`
* Add multiple routes
* Implement controllers & middleware flow
* Connect database (MongoDB)

---


## 🔧 Middleware Added

Implemented global middlewares for:
- Logging requests
- Authentication handling
- Data validation

All middlewares are executed in sequence using `app.use()` before reaching route handlers.