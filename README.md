# Scalable Task Management System

A full-stack Task Management application built with a robust Node.js/Express backend and a modern Next.js 16 frontend. This project demonstrates secure Authentication, Role-Based Access Control (RBAC), and scalable architecture practices.

## 🚀 Features

### Backend (Server)
- **Framework**: Node.js & Express with TypeScript.
- **Database**: PostgreSQL managed via Prisma ORM (with Connection Pooling).
- **Authentication**: Secure JWT-based auth with `bcrypt` password hashing.
- **RBAC**: 
  - **Admin**: Can view and manage all tasks.
  - **User**: Can only manage their own tasks.
- **API Documentation**: Integrated Swagger UI.
- **Validation**: Zod for runtime request validation.

### Frontend (Client)
- **Framework**: Next.js 16 (App Router).
- **Styling**: Tailwind CSS v4 for a premium, responsive design.
- **State Management**: React Context API for global Authentication state.
- **UX**: 
  - Protected Routes (Dashboard guarantees auth).
  - Modal-based Task creation/editing.
  - Real-time feedback with nice status indicators.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, Prisma, PostgreSQL, Docker (ready), TypeScript.
- **Frontend**: Next.js, React, Tailwind CSS, Lucide React, Axios.
- **Tools**: Swagger, Zod, ESLint, Prettier.

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL Database (URL required)

### 1. Backend Setup
Navigate to the server directory:
```bash
cd server
```

Install dependencies:
```bash
npm install
```

Set up Environment Variables:
Create a `.env` file in `server/` with:
```env
DATABASE_URL="your_postgres_connection_string"
JWT_SECRET="your_secret_key"
PORT=5000
```

Generate Prisma Client & Push Schema:
```bash
npx prisma generate
npx prisma db push
```

Start the Server:
```bash
npx tsx src/server.ts
```
> Server runs on `http://localhost:5000`
> API Docs at `http://localhost:5000/api-docs`

### 2. Frontend Setup
Navigate to the client directory:
```bash
cd client
```

Install dependencies:
```bash
npm install
```

Start the Development Server:
```bash
npm run dev
```
> Client runs on `http://localhost:3000`

## 🧪 Testing the App
1. **Register**: Go to `/register` and create an account.
   - Default role is `USER`.
   - To test Admin, manually update the role in DB or modify the registration code temporarily.
2. **Dashboard**: automatically redirects to `/dashboard` upon login.
3. **Create Task**: Click "New Task" to open the modal.
4. **Manage**: Edit or Delete tasks using the card actions.

## 📂 Project Structure
```
├── client/                 # Next.js Frontend
│   ├── app/                # App Router Pages
│   ├── components/         # Reusable UI Components
│   ├── context/            # Global State (Auth)
│   └── lib/                # Utilities (API Client)
│
├── server/                 # Express Backend
│   ├── prisma/             # DB Schema & Config
│   ├── src/
│   │   ├── config/         # DB Connection
│   │   ├── controllers/    # Route Logic
│   │   ├── middleware/     # Auth & RBAC
│   │   ├── routes/         # API Endpoint Definitions
│   │   └── utils/          # Helpers (Swagger)
```
 
