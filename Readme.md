# 🧠 Second Brain – Personal Knowledge Hub

A **Second Brain** application that allows users to **collect, organize, and share content** from multiple sources (YouTube, Tweets, Documents, Links) in one centralized place.

This project focuses on **backend architecture, authentication, validation, and scalable design**, with future plans for **AI-powered search using embeddings**.

---

## 📸 What We’re Building

A personal knowledge management system where users can:
- Save useful content from the web
- Organize it by type and tags
- Generate shareable links
- Access saved content securely
- (Future) Search content using AI embeddings

---

## 🚀 Features

### ✅ Implemented
- 🔐 User authentication (JWT-based)
- 🧾 Content creation with validation
- 🏷️ Tag-based content organization
- 🔗 Shareable access links
- ❌ Revoke shared links
- 🧹 Secure deletion & access control
- 🛡️ Input validation using Zod
- 📦 MongoDB with Mongoose schemas

### 🧠 Planned (Future)
- 🔍 Semantic search using embeddings
- 🤖 AI-powered content recall
- ⏳ Link expiration
- 📊 Analytics on shared links
- 🌐 Frontend dashboard (Next.js)

---

## 🛠️ Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Mongoose**
- **Zod** (Validation)
- **JWT** (Authentication)

### Tooling
- ESLint
- Prettier
- dotenv
- ts-node / tsx

---

## 📂 Project Structure

```txt

├── src/
│   ├── config/
│   │   └── envConfig.ts
│   │
│   ├── controllers/
│   │   ├── Login.controller.ts
│   │   ├── SignUp.controller.ts
│   │   ├── PostContent.controller.ts
│   │   ├── GetUserContent.controller.ts
│   │   ├── DeleteContent.controller.ts
│   │   ├── ShareContent.controller.ts
│   │   └── ShareAbleLinkAccess.controller.ts
│   │
│   ├── DB/
│   │   └── dbConnection.ts
│   │
│   ├── middleware/
│   │   └── UserAuth.middleware.ts
│   │
│   ├── Models/
│   │   └── user.models.ts
│   │
│   ├── Routes/
│   │   └── user.routes.ts
│   │
│   ├── Validations/
│   │   ├── Login.validation.ts
│   │   ├── Signup.validations.ts
│   │   └── NewContent.ts
│   │
│   └── index.ts
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md



🔐 Authentication Flow

User logs in / signs up

Server generates a JWT containing userId

JWT is verified by middleware

req.userId is attached securely

Controllers use req.userId for authorization

🧾 Content Types Supported
document
tweet
youtube
link


Each content item contains:

type

link

title

tags

userId

🔗 Shareable Links Flow

User generates a share link

A unique hash is created

Hash maps to a userId

Anyone with the link can access shared content

User can revoke access anytime

🧪 Validation Strategy

Zod is used for:

Request body validation

Type safety

Clear error responses

Example:

z.object({
  type: z.enum(["document", "tweet", "youtube", "link"]),
  link: z.string().url(),
  title: z.string().min(5).max(100),
  tags: z.array(z.string().min(1))
});

🧠 Why This Project Matters

This project demonstrates:

Clean backend architecture

Real-world API design

Secure authentication patterns

Validation best practices

MongoDB schema relationships

Scalable thinking (AI + embeddings ready)

It’s not just CRUD — it’s foundation-level system design.

🏃‍♂️ Getting Started
1️⃣ Clone the repo
git clone https://github.com/amanasthana1111/second-brain
cd second-brain-backend

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret

4️⃣ Run the project
npm run dev

📌 API Endpoints (Sample)
POST    /auth/register
POST    /auth/login

POST    /content
GET     /content
DELETE  /content/:id

POST    /share-link
DELETE  /share-link
GET     /access/:hash



---
