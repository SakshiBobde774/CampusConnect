# CampusConnect 🚀

CampusConnect is a centralized web platform designed to bridge the information gap for college students. The application serves as a one-stop hub for real-time updates on all campus activities—including events, hackathons, seminars, sports, and community group information—thereby boosting student engagement and ensuring they never miss an opportunity.

CampusConnect is packed with features designed to create a vibrant and informed campus community:

### 👤 User & Profile Management
* **Secure Authentication:** Safe and secure user registration and login system using JWT.
* **Profile Customization:** Users can create and manage their profiles with a profile picture, bio, social media links, and academic details.
* **Password Management:** Functionality for users to securely reset their passwords.

### 📢 Core Information Hub
* **Dynamic Activity Feed:** A centralized, real-time feed for all official announcements and user-generated posts.
* **Event Calendar & Management:** Create, view, and RSVP to campus events like workshops, seminars, and fests. Includes event details, date, time, and location.
* **Hackathon & Competition Portal:** A dedicated section listing all upcoming hackathons and competitions with details and registration links.
* **Clubs & Groups:** Discover and join various campus clubs. Each group has its own page for announcements and discussions.

### 🤝 Community & Engagement
* **Create & Share Posts:** Users can share updates, ask questions, or post information with support for text and images.
* **Interactive Posts:** Engage with content through likes and comments to foster discussion.
* **Powerful Search:** Easily find students, faculty, events, clubs, or specific posts.
* **Notifications:** Get real-time notifications for event reminders, new posts in your groups, likes, and comments.


## 💻 Tech Stack

This project is built with a modern, efficient tech stack:

* **Frontend:**
    * **React.js:** A JavaScript library for building user interfaces.
    * **Vite:** A next-generation frontend build tool for significantly faster development.
    * **CSS:** Standard CSS for styling components.

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

# Terminal 2: Run the Frontend Server
In the root CampusConnect directory:

The command for Vite is 'npm run dev'
npm run dev
