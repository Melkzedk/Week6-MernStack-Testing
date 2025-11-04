🐞 MERN Bug Tracker

A full-stack bug tracking application built with the MERN stack (MongoDB, Express, React, Node.js).
This project demonstrates CRUD functionality, comprehensive testing (unit, integration, E2E), and practical debugging techniques for real-world MERN apps.

🚀 Features

Report Bugs: Create new bug reports with a title and description.

View Bugs: See a list of all reported bugs.

Update Status: Mark bugs as open, in-progress, or resolved.

Delete Bugs: Remove bugs when they’re resolved or no longer relevant.

Error Handling: Backend error middleware and frontend error boundaries ensure stable operation.

Testing: Includes unit, integration, and end-to-end test examples using Jest, React Testing Library, and Cypress.

🧩 Tech Stack

Frontend: React, Axios, Jest, React Testing Library
Backend: Node.js, Express.js, MongoDB, Mongoose, Jest, Supertest
Testing Tools: Jest, React Testing Library, Cypress
Debugging Tools: Chrome DevTools, Node.js Inspector, Console Logs

⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/your-username/mern-bug-tracker.git
cd mern-bug-tracker

2. Set Up the Server
cd server
npm install
cp .env.example .env


Edit the .env file with your own MongoDB connection string if needed.

Then run the backend:

npm run dev


The server should start on http://localhost:5000

3. Set Up the Client
cd ../client
npm install
npm start


The frontend should start on http://localhost:3000

🧪 Running Tests
Backend Tests

Run Jest unit and integration tests for Express routes and helpers:

cd server
npm test

Frontend Tests

Run component and integration tests:

cd client
npm test

End-to-End Tests (Cypress)

For browser-based E2E testing:

cd client
npx cypress open

🐛 Debugging

This project intentionally includes a few debug scenarios (marked with
TODO: INTENTIONAL_BUG) to help you practice real-world troubleshooting.

You can:

Use console logs to trace values.

Use Chrome DevTools to inspect React component states and network requests.

Use Node.js Inspector:

node --inspect-brk src/index.js


Test error boundaries by triggering component crashes in the UI.

🧰 Error Handling

Backend: Centralized Express error middleware catches all server errors and returns JSON responses.

Frontend: React error boundaries prevent app crashes and display fallback UI when unexpected issues occur.

🧑‍💻 Future Improvements

Add user authentication and role-based permissions.

Implement bug prioritization (e.g., high, medium, low).

Enable file uploads (screenshots or logs).

Add filtering and search capabilities.

Deploy on Render, Vercel, or Railway with CI/CD integration.

📄 License

This project is open source and available under the MIT License.
