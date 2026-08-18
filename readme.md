অবশ্যই ভাই। এখন পর্যন্ত আমরা 13.1-এ যা যা সত্যি সত্যি শিখেছি, সেগুলোই README-তে update করে দিলাম। যেগুলো এখনো শেখা হয়নি সেগুলো [ ] থাকবে। নিচের পুরোটা replace করে তোমার README.md-তে বসিয়ে দাও।

# 🚀 Module 13 — TypeScript with Backend

> Learning Backend Development with **Node.js, Express.js, TypeScript, MongoDB, Mongoose, Zod, ESLint, Prettier and Unit Testing**.

---

## 📚 Module 13 Syllabus

- [13.1 Node.js + Express.js Project Setup](#131-nodejs--expressjs-project-setup)
- [13.2 MongoDB Integration](#132-mongodb-integration)
- [13.3 CRUD Operations](#133-crud-operations)
- [13.4 Zod Validation](#134-zod-validation)
- [13.5 ESLint + Prettier Setup](#135-eslint--prettier-setup)
- [13.6 Unit Testing](#136-unit-testing)

### 🎯 Final Project

**Basic CRUD Application — Node.js + Express.js + TypeScript (MVC Pattern)**

---

# 13.1 Node.js + Express.js Project Setup

We are learning this section from **zero level**.

---

# 🟢 1. What is Node.js?

## Concept

**Node.js is a JavaScript Runtime Environment** that allows us to run JavaScript code outside the browser.

### In simple words:

> **Node.js = An environment for running JavaScript outside the browser.**

JavaScript is a programming language, while Node.js is a runtime environment.

---

# 🧠 2. Why do we need Node.js?

Suppose we have a website and a user wants to get users' data.

We need a **Backend Server** to handle the request and communicate with the database.

### Request Flow

```text
User / Browser
      ↓
   Request
      ↓
 Backend Server
      ↓
   Database
      ↓
   Response
      ↓
User / Browser
```

### Node.js is commonly used for:

- Backend development
- Creating APIs
- Creating servers
- Working with databases
- Handling client requests

---

# 🟡 3. Is Node.js a Programming Language?

**No ❌**

```text
JavaScript → Programming Language

Node.js → Runtime Environment
```

JavaScript is the programming language.

Node.js is the runtime environment that allows JavaScript to run outside the browser.

### Remember

```text
JavaScript = Programming Language

Node.js = Runtime Environment
```

---

# 🔵 4. How does Node.js run JavaScript?

Suppose we create:

```text
app.js
```

Inside:

```js
const message = "Hello Node.js";

console.log(message);
```

Run:

```bash
node app.js
```

Output:

```text
Hello Node.js
```

### Meaning

```bash
node app.js
```

means:

> Run the `app.js` JavaScript file using Node.js.

---

# 🧩 5. Browser JavaScript vs Node.js

## Browser JavaScript

```text
JavaScript
    ↓
Browser
    ↓
Web Page / UI
```

Browser JavaScript commonly works with:

- HTML
- CSS
- DOM
- User Interface

Example:

```js
document.getElementById("title");
```

---

## Node.js

```text
JavaScript
    ↓
Node.js
    ↓
Server / Backend
```

Node.js is commonly used for:

- Backend development
- API development
- Server-side programming
- Database communication
- Handling client requests

---

## ⭐ Main Difference

| Browser JavaScript | Node.js |
|---|---|
| Runs inside the browser | Runs outside the browser |
| Mainly works with Web Pages/UI | Mainly works with Backend/Server |
| Can access DOM | Does not have Browser DOM |
| Uses Browser APIs | Uses Node.js APIs |
| Commonly used for frontend | Commonly used for backend |

### Easy Formula

```text
Web Page / UI
     ↓
Browser JavaScript


Server / API
     ↓
Node.js
```

---

# 🟣 6. V8 JavaScript Engine

**V8 is a JavaScript Engine** developed by Google.

It is responsible for executing JavaScript code.

### Relationship between Node.js and V8

```text
JavaScript Code
      ↓
Node.js Runtime
      ↓
V8 JavaScript Engine
      ↓
JavaScript Execution
```

### Important

```text
JavaScript → Programming Language

V8 → JavaScript Engine

Node.js → JavaScript Runtime Environment
```

Node.js uses the V8 engine to execute JavaScript outside the browser.

---

# 🛠️ 7. Check Node.js and npm Version

We checked the installed versions using:

```bash
node -v
```

Output:

```text
v24.12.0
```

We also checked npm:

```bash
npm -v
```

Output:

```text
11.6.2
```

### Remember

```text
node -v
→ Check Node.js version

npm -v
→ Check npm version
```

---

# 📦 8. What is npm?

**npm** stands for **Node Package Manager**.

It is used to:

- Install packages
- Manage dependencies
- Run project scripts
- Manage Node.js project packages

Example:

```bash
npm install express
```

---

# 📄 9. package.json

`package.json` contains important information about a Node.js project.

It can contain:

- Project information
- Dependencies
- Development dependencies
- Scripts
- Project configuration

Example:

```json
{
  "name": "node-backend",
  "version": "1.0.0"
}
```

### Important

```text
package.json
     ↓
Project Information
     +
Dependencies
     +
Scripts
```

---

# 🟠 10. TypeScript in Backend

We are using **TypeScript** with Node.js.

TypeScript helps us catch type-related problems before running the code.

### Basic idea

```text
TypeScript Code
      ↓
Type Checking
      ↓
Compile
      ↓
JavaScript
      ↓
Node.js
      ↓
Run
```

### Why TypeScript?

TypeScript can help reduce errors by checking types during development/compilation.

---

# ⚙️ 11. Installing / Checking TypeScript

We checked the TypeScript compiler using:

```bash
npx tsc -v
```

Output:

```text
Version 7.0.2
```

### `tsc`

`tsc` means the **TypeScript Compiler**.

---

# 🔵 12. TypeScript Compilation

TypeScript code is compiled into JavaScript.

```text
TypeScript
    ↓
TypeScript Compiler
    ↓
JavaScript
```

Example:

```text
src/index.ts
     ↓
  npx tsc
     ↓
dist/index.js
```

Then Node.js can run the JavaScript:

```bash
node dist/index.js
```

Example output:

```text
Your Name is : Emon Hossain Hira
```

---

# ⚙️ 13. tsconfig.json

We created the TypeScript configuration file using:

```bash
npx tsc --init
```

This created:

```text
tsconfig.json
```

### What is tsconfig.json?

`tsconfig.json` contains configuration options for the TypeScript compiler.

It controls how TypeScript code is compiled.

---

## Important TypeScript Configuration

We are currently using settings such as:

```json
{
  "compilerOptions": {
    "module": "nodenext",
    "target": "esnext",
    "strict": true,
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "skipLibCheck": true
  }
}
```

---

# 📁 14. src Folder

We created a `src` folder to keep our TypeScript source code organized.

Current structure:

```text
src/
├── index.ts
├── app.ts
└── server.ts
```

### Concept

```text
src/
 ↓
Source TypeScript Code
```

---

# 📁 15. dist Folder

After TypeScript compilation, JavaScript output is generated inside the configured output directory.

Example:

```text
src/
   index.ts

      ↓
    npx tsc

dist/
   index.js
```

We run the compiled JavaScript using Node.js:

```bash
node dist/index.js
```

---

# 🚫 16. .gitignore

We should not push generated or sensitive files to Git.

Our `.gitignore` contains:

```gitignore
node_modules/
dist/
.env
```

### Why ignore `node_modules/`?

Packages can be installed again using:

```bash
npm install
```

The dependencies are already listed in:

```text
package.json
package-lock.json
```

### Why ignore `dist/`?

`dist/` contains generated JavaScript files created from TypeScript.

### Why ignore `.env`?

`.env` can contain sensitive information such as:

- Database URLs
- API keys
- Secrets

---

# 🟢 17. What is Express.js?

**Express.js is a web framework for Node.js.**

It makes it easier to build and manage:

- Servers
- APIs
- Routes
- Middleware
- Request handling
- Response handling

### Important

```text
Node.js
   ↓
Runtime Environment

Express.js
   ↓
Web Framework
   ↓
Works on Node.js
   ↓
Makes Backend Development Easier
```

> Express.js is not a replacement for Node.js. It works on top of Node.js.

---

# 📦 18. Installing Express.js

We installed Express using:

```bash
npm install express
```

Because we are using TypeScript, we also installed Express type definitions:

```bash
npm install -D @types/express
```

### Why `@types/express`?

Express is a JavaScript package.

TypeScript needs type information about Express.

```text
express
   ↓
Actual Express package

@types/express
   ↓
Type information for TypeScript
```

---

# 🏗️ 19. app.ts

We created:

```text
src/app.ts
```

The `app.ts` file contains the Express application configuration.

Example:

```ts
import express from "express";

const app = express();

export default app;
```

### Important

```ts
const app = express();
```

This creates the Express application.

```text
express()
    ↓
Express Application
    ↓
app
```

---

# 🚀 20. server.ts

We created:

```text
src/server.ts
```

Example:

```ts
import app from "./app.js";

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Important

`server.ts` is responsible for starting the server.

```text
app.ts
   ↓
Express Application

server.ts
   ↓
Start Server
```

### `app.listen()`

```ts
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

This starts the server on port `5000`.

---

# 🧩 21. app.ts vs server.ts

### app.ts

Responsible for:

- Creating the Express application
- Configuring the application
- Adding middleware
- Adding routes

### server.ts

Responsible for:

- Starting the server
- Listening on a port

### Easy Formula

```text
app.ts
  ↓
Application Setup

server.ts
  ↓
Server Start
```

---

# 🔵 22. First Express Server

We successfully created and ran our server.

Command:

```bash
npx tsc
```

Then:

```bash
node dist/server.js
```

Output:

```text
Server is running on port 5000
```

This means our Express server successfully started.

---

# 🔵 23. Request and Response

## What is a Request?

A **Request** is information/request sent from the client to the server.

```text
Client
   ↓
Request
   ↓
Server
```

## What is a Response?

A **Response** is the result/data sent from the server back to the client.

```text
Client
   ↓
Request
   ↓
Server
   ↓
Response
   ↓
Client
```

### Easy Formula

```text
req → Client → Server

res → Server → Client
```

---

# 🟢 24. Express Request and Response

In Express:

```ts
(req, res)
```

means:

```text
req → Request
res → Response
```

Example:

```ts
app.get("/", (req, res) => {
  res.send("Hello from TypeScript Backend!");
});
```

### `res.send()`

```ts
res.send("Hello from TypeScript Backend!");
```

It sends a response to the client.

---

# 🛣️ 25. What is a Route?

A **Route** defines what the server should do for a specific HTTP method and URL path.

### Route Formula

```text
Route = HTTP Method + Path + Handler
```

Example:

```ts
app.get("/users", (req, res) => {
  res.send("Users Data");
});
```

Here:

```text
GET
 ↓
HTTP Method

/users
 ↓
Path

(req, res) => {...}
 ↓
Handler
```

---

# 🧩 26. Multiple Routes

We created multiple routes:

```ts
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  res.send("Users Data");
});

app.get("/products", (req, res) => {
  res.send("Products Data");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
```

### Example

```text
GET /
    ↓
Home Page

GET /users
    ↓
Users Data

GET /products
    ↓
Products Data
```

---

# 🌐 27. HTTP Methods

HTTP methods define what type of operation the client wants to perform.

The main methods we learned:

```text
GET
POST
PUT
PATCH
DELETE
```

### CRUD Relationship

```text
Create → POST

Read → GET

Update → PUT / PATCH

Delete → DELETE
```

---

## GET

Used to get/read data.

```text
GET /users
```

```text
GET → Read
```

---

## POST

Used to send/create new data.

```text
POST /users
```

```text
POST → Create
```

---

## PUT

Used to completely update/replace existing data.

```text
PUT /users/10
```

```text
PUT → Full Update
```

---

## PATCH

Used to partially update existing data.

```text
PATCH /users/10
```

```text
PATCH → Partial Update
```

---

## DELETE

Used to delete data.

```text
DELETE /users/10
```

```text
DELETE → Delete
```

---

# 📦 28. Request Body

A **Request Body** contains data sent from the client to the server.

Example:

```json
{
  "name": "Emon",
  "age": 22
}
```

For example:

```text
POST /users
```

with:

```json
{
  "name": "Emon",
  "age": 22
}
```

---

# 🧩 29. express.json()

We added:

```ts
app.use(express.json());
```

This middleware allows Express to parse incoming JSON request bodies.

Then we can access the body using:

```ts
req.body
```

Example:

```ts
app.post("/users", (req, res) => {
  console.log(req.body);

  res.send("User created");
});
```

If the client sends:

```json
{
  "name": "emonhossainhira2"
}
```

The server can receive it through:

```ts
req.body
```

Example output:

```text
request body { name: 'emonhossainhira2' }
```

---

# 🛣️ 30. Route Parameters

Route parameters are values included inside the URL path.

Example:

```text
GET /users/1
```

Here:

```text
/users/:id
      ↓
Route Parameter
```

Express:

```ts
app.get("/users/:id", (req, res) => {
  console.log("User ID:", req.params.id);

  res.send("User Get Here");
});
```

For:

```text
GET /users/1
```

we get:

```ts
req.params.id
```

Value:

```text
1
```

### Formula

```text
/users/:id
      ↓
req.params.id
```

---

# 🗑️ 31. DELETE with Route Parameter

We also created:

```ts
app.delete("/users/:id", (req, res) => {
  console.log("User ID:", req.params.id);

  res.send("User is deleted here.");
});
```

Example:

```text
DELETE /users/1
```

Flow:

```text
Client
   ↓
DELETE /users/1
   ↓
req.params.id
   ↓
1
```

---

# 🔎 32. Query Parameters

Query parameters allow the client to send additional information through the URL.

Example:

```text
/users?name=emon
```

Here:

```text
/users
   ↓
Path

?name=emon
   ↓
Query Parameter
```

We access query parameters using:

```ts
req.query
```

Example:

```ts
app.get("/users", (req, res) => {
  console.log(req.query);

  res.send("Users data");
});
```

Request:

```text
GET /users?name=emon
```

Output conceptually:

```text
{
  name: "emon"
}
```

---

# 🔎 33. Specific Query Parameter

Example:

```text
/products?category=laptop
```

We can access:

```ts
req.query.category
```

Example:

```ts
app.get("/products", (req, res) => {
  console.log("Category:", req.query.category);

  res.send("Products");
});
```

---

# 🆚 34. Request Body vs Params vs Query

This is an important distinction.

## Request Body

```text
POST /users
```

Data:

```json
{
  "name": "Emon"
}
```

Access:

```ts
req.body
```

---

## Route Parameter

```text
GET /users/10
```

Access:

```ts
req.params.id
```

---

## Query Parameter

```text
GET /users?name=emon
```

Access:

```ts
req.query.name
```

---

## 🧠 Easy Formula

```text
Request Body
     ↓
req.body


/users/10
     ↓
req.params.id


/users?name=emon
     ↓
req.query.name
```

---

# 🧪 35. Current Express Application

Our current `app.ts` contains concepts we have practiced:

```ts
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  res.send("Users Data");
});

app.get("/products", (req, res) => {
  res.send("Products Data");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.post("/users", (req, res) => {
  console.log("Request Body:", req.body);

  res.send("Users Created");
});

app.get("/users/:id", (req, res) => {
  console.log("User ID:", req.params.id);

  res.send("User Get Here");
});

app.delete("/users/:id", (req, res) => {
  console.log("User ID:", req.params.id);

  res.send("User is deleted here.");
});

export default app;
```

---

# 📊 36. Request Data Summary

| Type | Example | Express |
|---|---|---|
| Body | `{ name: "Emon" }` | `req.body` |
| Params | `/users/10` | `req.params.id` |
| Query | `/users?name=emon` | `req.query.name` |

---

# 📌 37. Learning Progress

## 13.1 Node.js + Express.js Project Setup

### Node.js Fundamentals

[x] What is Node.js?  
[x] Why do we need Node.js?  
[x] Node.js is not a programming language  
[x] Node.js Runtime Environment  
[x] How Node.js runs JavaScript  
[x] Browser JavaScript vs Node.js  
[x] What is V8?  
[x] Relationship between Node.js and V8  

### Node.js / TypeScript Setup

[x] Check Node.js version  
[x] Check npm version  
[x] What is npm?  
[x] package.json  
[x] TypeScript setup  
[x] TypeScript compiler (`tsc`)  
[x] Type checking concept  
[x] TypeScript → JavaScript compilation  
[x] tsconfig.json  
[x] src folder  
[x] dist folder  
[x] .gitignore  
[x] node_modules/  
[x] app.ts  
[x] server.ts  

### Express.js

[x] What is Express.js?  
[x] Express.js works on Node.js  
[x] Install Express.js  
[x] Install `@types/express`  
[x] Create Express application  
[x] Start Express server  
[x] `app.listen()`  
[x] Server running on port 5000  

### Request & Response

[x] What is Request?  
[x] What is Response?  
[x] `req` object  
[x] `res` object  
[x] `res.send()`  

### Routes

[x] What is a Route?  
[x] Route Path  
[x] Route Handler  
[x] Multiple Routes  
[x] GET Route  
[x] POST Route  
[x] DELETE Route  

### HTTP Methods

[x] GET  
[x] POST  
[x] PUT concept  
[x] PATCH  
[x] DELETE  
[x] HTTP Methods and CRUD relationship  

### Request Data

[x] Request Body  
[x] `express.json()`  
[x] `req.body`  
[x] Route Parameters  
[x] `req.params`  
[x] `req.params.id`  
[x] Query Parameters  
[x] `req.query`  
[x] `req.query.name`  
[x] Body vs Params vs Query  

### Still To Learn in 13.1

[ ] HTTP Status Codes  
[ ] `res.status()`  
[ ] PUT Route Practice  
[ ] PATCH Route Practice  
[ ] Middleware concept  
[ ] Custom Middleware  
[ ] Route-level Middleware  
[ ] Basic API structure  
[ ] npm Scripts  
[ ] Final 13.1 Practice API  

---

# 🛠️ Final Project

After completing Module 13, I will build:

## Basic CRUD Application

### Technologies

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Zod
- ESLint
- Prettier
- Unit Testing

### Architecture

```text
src/
│
├── controllers/
├── models/
├── routes/
├── services/
├── middlewares/
├── validations/
├── config/
├── app.ts
└── server.ts
```

### Request Flow

```text
Client
  ↓
Route
  ↓
Controller
  ↓
Service
  ↓
Model
  ↓
MongoDB
```

---

# 🎯 Learning Goal

My goal is not to memorize code.

My goal is:

**Understand → Practice → Build → Become Confident**

---

# 📍 Current Position

**Module:** 13  
**Section:** 13.1 Node.js + Express.js Project Setup  
**Current Topic:** HTTP Status Codes  
**Status:** 🟢 Learning  

---

> **Next Lesson:** HTTP Status Codes

✅ এখন পর্যন্ত তোমার progress

13.1 Node.js + Express.js
│
├── Node.js Fundamentals      ✅
├── V8                         ✅
├── npm & package.json         ✅
├── TypeScript Setup           ✅
├── tsconfig.json              ✅
├── app.ts / server.ts         ✅
├── Express.js                 ✅
├── Server                     ✅
├── Request / Response         ✅
├── Routes                     ✅
├── HTTP Methods               ✅
├── Request Body               ✅
├── Route Params               ✅
├── Query Params               ✅
│
├── Status Codes               ⏳  ← এখন এখানে
├── Middleware                 ⏳
├── Basic API                  ⏳
└── npm Scripts                ⏳

তাই এখন থেকে README update করার সময় আমি শুধু নতুন শেখা বিষয়গুলো যোগ করব; আগে শেখা বিষয় duplicate করব না।