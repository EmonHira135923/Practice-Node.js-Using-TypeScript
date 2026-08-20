# 📘 TypeScript Mastery: Module 13 (Node.js + Express.js + dotenv + TypeScript)

Welcome to **Module 13**! In this module, you will learn how to build a scalable, type-safe REST API using **Node.js**, **Express.js**, **dotenv**, and **TypeScript** structured with the **MVC (Model-View-Controller)** pattern.

---

## 📌 13.1 Step-by-Step Project Setup & Dependencies

To initialize a Node.js project with TypeScript, ES Modules, and hot-reloading using `tsx`, execute the following terminal commands:

```bash
# 1. Initialize Node.js project
npm init -y

# 2. Install core runtime dependencies
npm i express dotenv

# 3. Install TypeScript and development dependencies
npm i -D typescript tsx @types/node @types/express

```

### TypeScript Configuration (`tsconfig.json`)

Generate `tsconfig.json` using `npx tsc --init` and ensure these compiler options are active:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}

```

### Project Scripts Configuration (`package.json`)

Ensure `"type": "module"` is configured so Node.js natively handles ES Module imports:

```json
{
  "name": "node.js-using-typescript",
  "version": "1.0.0",
  "description": "Express.js REST API with TypeScript and MVC Architecture",
  "main": "./dist/server.js",
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node ./dist/server.js",
    "dev": "tsx watch src/server.ts"
  },
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.21.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^22.0.0",
    "typescript": "^5.5.4",
    "tsx": "^4.16.2"
  }
}

```

---

## 📌 13.2 Architecture Overview (MVC Pattern)

```text
src/
├── config/
│   └── index.config.ts    # Centralized environment configurations
├── controllers/
│   ├── item.controller.ts # Handlers for item operations
│   └── projectStart.controller.ts # Root endpoint handler
├── middlewares/
│   └── errorHandler.ts    # Centralized Express error-handling middleware
├── models/
│   └── item.models.ts     # Data contracts/interfaces & in-memory store
├── routes/
│   ├── item.routes.ts     # Express router for item endpoints
│   └── projectStart.routes.ts # Express router for root endpoint
├── app/
│   └── app.ts             # Express application & middleware setup
└── server.ts              # Entry point to listen on designated port

```

### 📖 Folder Breakdown & Differences / ফোল্ডার সমূহের কাজ ও পার্থক্য:

* **`config/`**:
* **English:** Centralizes environment variables (`process.env`) into a typed config object. Prevents scattered `process.env` calls.
* **বাংলা:** প্রজেক্টের সমস্ত এনভায়রনমেন্ট ভ্যারিয়েবল (`process.env`) একটি নির্দিষ্ট টাইপ-সেফ অবজেক্টে একত্রিত করে।


* **`models/`**:
* **English:** Defines data structures (TypeScript interfaces) and handles database interactions or mock data stores.
* **বাংলা:** ডেটার স্ট্রাকচার (ইন্টারফেস) এবং ডেটাবেজ বা ইন-মেমোরি স্টোর ডিফাইন করে।


* **`controllers/`**:
* **English:** Contains business logic for each route, extracting HTTP requests (`req`) and returning HTTP responses (`res`).
* **বাংলা:** রাউটের মূল বিজন্যাস লজিক প্রসেস করে এবং রিকোয়েস্ট গ্রহণ করে রেসপন্স প্রদান করে।


* **`routes/`**:
* **English:** Maps specific URL paths to their respective controller functions.
* **বাংলা:** নির্দিষ্ট URL এন্ডপয়েন্টের সাথে কন্ট্রোলার ফাংশনগুলোর ম্যাপিং সম্পন্ন করে।


* **`middlewares/`**:
* **English:** Intercepts incoming requests for authentication, logging, parsing, or error catching before reaching handlers.
* **বাংলা:** রিকোয়েস্ট কন্ট্রোলারে পৌঁছানোর আগে বা এরর হ্যান্ডেল করার সময় মধ্যবর্তী ফিল্টার হিসেবে কাজ করে।


* **`app/app.ts` vs `server.ts**`:
* **English:** `app.ts` configures middleware and routing without starting the server, allowing easy integration testing. `server.ts` imports `app.ts` and boots up the HTTP listener.
* **বাংলা:** `app.ts` মিডলওয়্যার এবং রাউট কনফিগার করে (সার্ভার স্টার্ট না করে), যা ইন্টিগ্রেশন টেস্টের জন্য সুবিধাজনক। `server.ts` অ্যাপটি ইম্পোর্ট করে সার্ভার চালু বা লিসেন করে।



---

## 📌 13.3 Code Implementation

### Environment File (`.env`)

```env
PORT=3000

```

### 1. Configuration (`src/config/index.config.ts`)

```typescript
import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
};

export default config;

```

### 2. Models (`src/models/item.models.ts`)

```typescript
export interface Item {
  id: number;
  itemName: string;
  description: string;
  price: number;
  inStock: boolean;
}

// In-memory data store for demonstration
export let items: Item[] = [];

```

### 3. Error Handling Middleware (`src/middlewares/errorHandler.ts`)

```typescript
import type { NextFunction, Request, Response } from "express";

export interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error("Error Intercepted:", err.message);
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

```

### 4. Controllers (`src/controllers/item.controller.ts`)

> **Note on TypeScript & NodeNext:** When using `"moduleResolution": "NodeNext"`, relative imports must include the explicit file extension (e.g., `../models/item.models.js`).

```typescript
import type { NextFunction, Request, Response } from "express";
import { items, type Item } from "../models/item.models.js";

// GET /api/items - Retrieve all items
export const getItems = (_req: Request, res: Response, next: NextFunction): void => {
  try {
    res.status(200).json({
      message: "All Products Retrieved Successfully",
      success: true,
      data: items,
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/items/add - Create a new item
export const createItems = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { itemName, description, price, inStock } = req.body;

    const newItem: Item = {
      id: Date.now(),
      itemName,
      description,
      price,
      inStock: Boolean(inStock),
    };

    items.push(newItem);

    res.status(201).json({
      message: "Product Added to Inventory Successfully",
      success: true,
      data: newItem,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/items/:id - Get a single item by ID
export const getItemsUsingID = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const idParam = req.params.id;
    const itemId = parseInt(idParam, 10);

    if (isNaN(itemId)) {
      res.status(400).json({
        message: "Invalid Item ID Provided",
        success: false,
      });
      return;
    }

    const item = items.find((i) => i.id === itemId);

    if (!item) {
      res.status(404).json({
        message: "No Item Found Matching Provided ID",
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: `Product '${item.itemName}' Retrieved Successfully`,
      success: true,
      data: item,
    });
  } catch (err) {
    next(err);
  }
};

// PUT /api/items/:id - Update an item by ID
export const updateProduct = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const idParam = req.params.id;
    const itemId = parseInt(idParam, 10);

    if (isNaN(itemId)) {
      res.status(400).json({
        message: "Invalid Item ID Provided",
        success: false,
      });
      return;
    }

    const itemIndex = items.findIndex((i) => i.id === itemId);

    if (itemIndex === -1) {
      res.status(404).json({
        message: "Product Not Found",
        success: false,
      });
      return;
    }

    const { itemName, description, price, inStock } = req.body;

    items[itemIndex] = {
      ...items[itemIndex],
      ...(itemName && { itemName }),
      ...(description && { description }),
      ...(price !== undefined && { price }),
      ...(inStock !== undefined && { inStock }),
    };

    res.status(200).json({
      message: "Product Updated Successfully",
      success: true,
      data: items[itemIndex],
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/items/:id - Delete an item by ID
export const deleteProduct = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const idParam = req.params.id;
    const itemId = parseInt(idParam, 10);

    if (isNaN(itemId)) {
      res.status(400).json({
        message: "Invalid Item ID Provided",
        success: false,
      });
      return;
    }

    const itemIndex = items.findIndex((i) => i.id === itemId);

    if (itemIndex === -1) {
      res.status(404).json({
        message: "Product Not Found",
        success: false,
      });
      return;
    }

    const [deletedItem] = items.splice(itemIndex, 1);

    res.status(200).json({
      message: "Product Deleted Successfully",
      success: true,
      data: deletedItem,
    });
  } catch (err) {
    next(err);
  }
};

```

### Root Controller (`src/controllers/projectStart.controller.ts`)

```typescript
import type { NextFunction, Request, Response } from "express";

export const projectStart = (_req: Request, res: Response, next: NextFunction): void => {
  try {
    res.status(200).send("Basic CRUD Operation API running with Express & TypeScript!");
  } catch (error) {
    next(error);
  }
};

```

### 5. Routers

**`src/routes/projectStart.routes.ts`**

```typescript
import { Router } from "express";
import { projectStart } from "../controllers/projectStart.controller.js";

const router = Router();

router.get("/", projectStart);

export default router;

```

**`src/routes/item.routes.ts`**

```typescript
import { Router } from "express";
import {
  createItems,
  deleteProduct,
  getItems,
  getItemsUsingID,
  updateProduct,
} from "../controllers/item.controller.js";

const router = Router();

router.get("/items", getItems);
router.post("/items/add", createItems);
router.get("/items/:id", getItemsUsingID);
router.put("/items/:id", updateProduct);
router.delete("/items/:id", deleteProduct);

export default router;

```

### 6. Express Application Setup (`src/app/app.ts`)

```typescript
import express, { type Application } from "express";
import itemRouter from "../routes/item.routes.js";
import projectStartRouter from "../routes/projectStart.routes.js";
import { errorHandler } from "../middlewares/errorHandler.js";

const app: Application = express();

// Body Parser Middleware
app.use(express.json());

// API Routes
app.use("/", projectStartRouter);
app.use("/api", itemRouter);

// Centralized Error Handling Middleware (Must be registered last)
app.use(errorHandler);

export default app;

```

### 7. Server Listener (`src/server.ts`)

```typescript
import app from "./app/app.js";
import config from "./config/index.config.js";

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`🚀 Server running in dev mode on http://localhost:${PORT}`);
});

```

---

## 📌 13.4 Running and Testing the Application

1. **Start Development Server (Hot Reloading)**:
```bash
npm run dev

```


2. **Build TypeScript to JavaScript**:
```bash
npm run build

```


3. **Run Compiled Production Build**:
```bash
npm start

```



---