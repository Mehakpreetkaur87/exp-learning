# 🚀 Express Learning Project (Step-by-Step)

This project documents my journey of learning **Node.js + Express** step by step, with each feature added as a separate Git commit.

---

## 📌 Tech Stack

* Node.js
* Express.js
* JavaScript

---

## 📂 Project Structure (Final State)

```bash
backendDev/
│
├── index.js
├── package.json
├── dummy.html
├── .gitignore
│
└── routes/
    ├── item.js
    └── products.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository from GitHub

```bash
git clone https://github.com/Mehakpreetkaur87/exp-learning.git
cd exp-learning
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Run the server

```bash
node index.js
```

Server runs at:

```
http://localhost:3000
```

---

# 📈 Step-by-Step Development (Git Commits)

This project is built incrementally. Each commit represents one learning step.

---

## 🟢 Step 1: Initialize Project

* Created Node.js project
* Installed Express
* Added `.gitignore`

```bash
git init
npm init -y
npm install express
```

---

## 🟢 Step 2: Basic Express Server

* Created `index.js`
* Initialized Express app
* Started server on port 3000

---

## 🟢 Step 3: Add Basic Routes

* Added:

  * GET `/`
  * POST `/items`
  * PUT `/items/:id`
  * DELETE `/items/:id`

👉 Learned CRUD basics

---

## 🟢 Step 4: Serve HTML File

* Created `dummy.html`
* Used:

```js
res.sendFile('./dummy.html', { root: __dirname })
```

👉 Learned how to send files from server

---

## 🟢 Step 5: Create Routes Folder

* Created `routes/`
* Added `item.js`

👉 Started modular structure

---

## 🟢 Step 6: Move Item Routes to Router

* Used:

```js
const router = express.Router();
```

* Shifted all `/api` logic into `item.js`

👉 Learned router separation

---

## 🟢 Step 7: Connect Item Routes

* Used:

```js
app.use('/api', item);
```

👉 Final endpoints:

* `/api/`
* `/api/items`
* `/api/items/:id`

---

## 🟢 Step 8: Add Product Routes

* Created `products.js`
* Added routes:

  * `/p/`
  * `/p/about`

---

## 🟢 Step 9: Connect Product Routes

```js
app.use('/p', products);
```

👉 Final endpoints:

* `/p/`
* `/p/about`

---

# 🔗 Final API Endpoints

## 📦 Item APIs

| Method | Route            | Description |
| ------ | ---------------- | ----------- |
| GET    | `/api/`          | Home route  |
| POST   | `/api/items`     | Create item |
| PUT    | `/api/items/:id` | Update item |
| DELETE | `/api/items/:id` | Delete item |

---

## 🛒 Product APIs

| Method | Route      | Description    |
| ------ | ---------- | -------------- |
| GET    | `/p/`      | Products home  |
| GET    | `/p/about` | About products |

---

# 🧠 Key Concepts Learned

* Express server setup
* Routing (CRUD operations)
* Router modularization
* `app.use()` middleware concept
* Sending HTML files
* Structuring backend projects

---

# ❗ Important Notes

* `node_modules` is ignored using `.gitignore`
* Server runs on port **3000**
* Each feature is committed separately (best practice)

---

# 🚀 Next Steps (Planned)

* Add controllers (MVC pattern)
* Connect MongoDB
* Add middleware (validation, logging)
* Implement authentication (JWT)
* Error handling

---
# ⭐ Learning Goal

This project is part of my journey to become a **backend developer using Node.js and Express**.

---
