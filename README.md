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


---

## 🛠️ Getting Started

### 📦 Installation

```bash
1. Clone the repository:
git clone https://github.com/your-username/event-booking-system.git
cd event-booking-system

2. Install dependencies:
npm install

3. Start the frontend development server:
npm run dev

4. Start the mock backend server with JSON Server:
json-server --watch data/events.json --port 8000
Make sure you have json-server installed globally.
If not: npm install -g json-server
