# 🔑 Nuxt 4 Magic Link Auth Demo

Demo project of authentication in **Nuxt 4** using **Magic Link** and **Cookie-Based Authentication**.  
This project is built for educational purposes and demonstrates how to implement a simple and reliable auth flow with a cookie session, Pinia, Nuxt-UI and TailwindCSS.

🚀 Live demo: [magic-link-auth-demo.vercel.app](https://magic-link-auth-demo.vercel.app/)

---

## ✨ Key Features

- 🔗 **Magic Link** authentication (passwordless login)
- 🍪 **Cookie-Based Authentication** for session management
- 🖥 SSR rendering with **Nuxt 4**
- 🎨 Modern UI: **Nuxt-UI + TailwindCSS**
- 🪄 State management with **Pinia**
- 🧩 Minimal yet complete structure (frontend + backend in one project)
- 📚 Demo courses to showcase protected and public pages

---

## 🔑 How to Use

1. Go to "Log In" (`/login`).
2. Enter your email and generate a **magic link**.  
   👉 In this demo, the link is displayed directly in the UI (not sent to email).  
   Press on "Magic Link" (Link example: `/api/auth/verify?token=abc123`)
3. Open the magic link → a `sessionId` cookie will be set.
4. Navigate to "My Profile" (`/user` → you’ll see your email and your personal courses).
5. "Log out" using `/api/auth/logout` → the cookie will be deleted and `/user` will become inaccessible.

---

## 🛠 Tech Stack

- ⚡ **Nuxt 4** (SSR, TypeScript)
- 🪄 **Pinia** (state management)
- 🎨 **TailwindCSS** + **Nuxt-UI** (UI components)
- 🍪 **Cookie-Based Auth** (sessions)

---

## 📋 Prerequisites

- Node.js **>=18**
- npm, pnpm, or yarn (your choice)

---

## 🚀 Installation & Run

Clone the repository:

```bash
git clone https://github.com/JoyMefisto/magic-link-auth-demo.git
cd magic-link-auth-demo
```

Install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

Run dev server:

```bash
npm run dev
```

📂 Project Structure

```bash
├── README.md
├── app
│   ├── app.vue
│   ├── assets
│   │   └── css
│   │       └── main.css
│   ├── components
│   │   ├── AppCard
│   │   │   └── AppCard.vue
│   │   └── AppHeader
│   │       └── AppHeader.vue
│   ├── layouts
│   │   └── default.vue
│   ├── pages
│   │   ├── index.vue
│   │   ├── login.vue
│   │   └── user.vue
│   └── store
│       ├── course
│       │   ├── api
│       │   │   └── index.ts
│       │   └── index.ts
│       └── user
│           ├── api
│           │   └── index.ts
│           └── index.ts
├── eslint.config.mjs
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── robots.txt
├── server
│   ├── api
│   │   ├── auth
│   │   │   ├── logout.post.ts
│   │   │   ├── magic.post.ts
│   │   │   └── verify.get.ts
│   │   ├── courses
│   │   │   └── index.get.ts
│   │   └── user
│   │       ├── courses.get.ts
│   │       └── index.get.ts
│   ├── db
│   │   ├── course.ts
│   │   ├── session.ts
│   │   └── token.ts
│   ├── middleware
│   │   └── auth.global.ts
│   └── utils
│       ├── helpers.ts
│       ├── magic.ts
│       └── session.ts
└── tsconfig.json
```

---

## 📡 API Endpoints

### 🌐 Public API

- `POST /api/auth/magic` → generate a magic link
- `GET /api/auth/verify?token=xxx` → verify token and set cookie
- `POST /api/auth/logout` → delete cookie and log out
- `GET /api/courses` → list of public demo courses

### 🔒 Protected API

- `GET /api/user/courses` → list of courses for the authenticated user

### 🛣️ Public Routes

- `/` → homepage with public demo courses
- `/login` → login page (request magic link)

### 🚫 Protected Routes

- `/user` → authenticated user profile (email + user’s courses)

---

## ⚙️ Environment Configuration

- No external dependencies (DB, email services, etc.).
- All demo data is stored **in memory** (`Map()`) on the server.
- After a server restart, sessions and demo are reset.

---

## 📄 License

This project is licensed under the **MIT License**.  
Created in 2025 for educational and demo purposes.

---

💬 Got ideas for improvement?  
Feel free to **open an issue** or **submit a PR**.  
⭐ If you find this project helpful, give it a star on GitHub!
