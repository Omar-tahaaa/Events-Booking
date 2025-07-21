# 🎟️ Event Booking System

A dynamic and responsive platform for browsing, booking, and managing events, built using **React**, **Redux Toolkit**, and **Firebase Authentication**.

---

## 🚀 Features

### 🛍️ Core Functionality

- **Event Browsing**: View a list of events with detailed descriptions.
- **Event Booking**: Logged-in users can book tickets for any available event.
- **Admin Capabilities**: Add, update, and delete events through the booking panel.
- **Authentication Gate**: Unauthenticated users can view event details but must log in to book.

### 🔐 User Authentication

- Powered by **Firebase Authentication**
- Secure login and registration flow
- Session management with persistent login state

### 🎨 UI & Design

- Clean, modern interface using **Bootstrap** and **CSS Modules**
- Responsive layout optimized for all screen sizes
- Sidebar displays all user bookings

### 🔄 State Management

- Centralized state using **Redux Toolkit**
- Manages event data, user sessions, and booking operations
- Scalable reducer/actions architecture

### 🧰 Tech Stack

| Category           | Tech Used                |
|--------------------|--------------------------|
| **Frontend**       | React, Redux Toolkit     |
| **Backend Services** | Firebase Authentication  |
| **Styling**        | CSS Modules, Bootstrap   |
| **Forms & Validation** | Formik              |
| **Dev Server**     | JSON Server (for mock data) |

---

## 🔧 Getting Started

### 1. Open Visual Studio Code in Your Desired Folder

- Open Visual Studio Code.
- Click **File > Open Folder** and choose the folder where you want to save the project (e.g., Desktop or Documents).

### 2. Clone the Repository Using VS Code Terminal

- In VS Code, open the integrated terminal (**Terminal > New Terminal**).
- Run the following commands in the terminal:

  ```sh
  git clone https://github.com/your-username/event-booking-system.git
  cd event-booking-system
  ```

### 2. Install dependencies

```sh
npm install
```

### 3. Run JSON Server (Mock Backend)

```sh
json-server --watch data/events.json --port 8000
```

**Clarification:**  
- You need to have `json-server` installed globally for this step to work.  
- If you don't have it, install it using:

```sh
npm install -g json-server
```

- This command starts a local REST API server at `http://localhost:8000` using the data in `data/events.json`.

### 4. Start the development server

- You should open a **new terminal window/tab** to run this command, so that JSON Server and the development server run simultaneously.
- When you open a **new terminal window/tab**, you need to navigate to your project folder again:
  ```sh
  cd event-booking-system
  ```
- Then run the development server:
  ```sh
  npm run dev
  ```

**Clarification:**  
- This will start the Vite development server.  
- Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173`).

---

## 📝 Notes

- Make sure both the Vite dev server and JSON Server are running at the same time for the app to work correctly.
- If you encounter any issues, check that your Node.js version is compatible and that all dependencies are installed.
