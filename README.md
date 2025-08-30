# CampusConnect 🚀

CampusConnect is a centralized web platform designed to bridge the information gap for college students. The application serves as a one-stop hub for real-time updates on all campus activities—including events, hackathons, seminars, sports, and community group information—thereby boosting student engagement and ensuring they never miss an opportunity.

* **User Authentication:** Secure user registration (`Signup.jsx`) and login (`Login.jsx`) functionality.
* **Dynamic News Feed:** A central feed (`Feed.jsx`) to display posts and updates from the community.
* **Post Management:** Ability to view individual posts (`PostCard.jsx`).
* **User Profiles:** Dedicated user profile pages (`Profile.jsx`).
* **Responsive Layout:** A clean and modern UI with a dedicated `Navbar.jsx` and `Footer.jsx`.

## 💻 Tech Stack

This project is built with a modern, efficient tech stack:

* **Frontend:**
    * **React.js:** A JavaScript library for building user interfaces.
    * **Vite:** A next-generation frontend build tool for significantly faster development.
    * **CSS:** Standard CSS for styling components (`Feed.css`, `index.css`).

* **Backend:**
    * **Node.js:** A JavaScript runtime environment for the server-side.
    * **Express.js:** A fast and minimalist web framework for building APIs.

* **Database:**
    * **MongoDB:** A NoSQL database, with schemas defined in the `models` directory (e.g., `User.js`).

* **Authentication:**
    * **JSON Web Tokens (JWT):** Handled via API routes like those in `routes/auth.js`.

## 🛠️ Installation and Setup

To get a local copy up and running, follow these simple steps, which are tailored to this project's specific file structure.

### Prerequisites

* Node.js (v16.x or later)
* npm (Node Package Manager)
* Git
* MongoDB (a local instance or a cloud service like MongoDB Atlas)

# Navigate into the backend directory
cd backend

# Install dependencies
npm install

# Make sure you are in the root CampusConnect directory
cd /path/to/your/CampusConnect

# Install dependencies
npm install

# Terminal 1: Run the Backend Server
In the /backend directory:

node index.js

# In the root CampusConnect directory:
The command for Vite is 'npm run dev'

npm run dev
