# Chatify

Chatify is a real-time chat application that allows users to send and receive messages instantly. Leveraging Socket.IO, it provides live communication with an intuitive interface for private and group conversations.

## Features

- Real-time messaging with Socket.IO
- Private and group chats
- Typing indicators and online/offline status
- User authentication and profiles
- Responsive design for mobile and desktop
- Optional: Message notifications

## Tech Stack

- Frontend: React, Vite
- Backend: Node.js, Express, Socket.IO
- Database: MongoDB
- Authentication: JWT
- Styling: Tailwind CSS / CSS Modules

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/chatify.git
Install dependencies

bash
Copy code
cd chatify/frontend
npm install
cd ../backend
npm install
Set up environment variables

text
Copy code
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
Run in development mode

bash
Copy code
# Backend
npm run dev
# Frontend
npm run dev --prefix frontend
Deployment
Build frontend for production

bash
Copy code
npm run build --prefix frontend
Start backend in production mode

bash
Copy code
npm start
