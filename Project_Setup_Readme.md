Project Setup & Test Execution Guide

This README provides quick setup steps for running th project, Cypress tests, and Newman API automation.

------------------------------

 Prerequisites

- Node.js installed
- MongoDB Compass or local MongoDB instance
- Postman (for API collection)
- VS Code (recommended)

------------------------------

 Project Setup

1. Clone the Repository
   git clone <your_project_repo>
   cd your_project_folder

2. Setup Frontend (Client)
   cd client
   npm install
   npm start

3. Setup Backend (Server)
   cd server
   npm install
   npm start

4. Mongo DB Compass
   

------------------------------

 Cypress Test Setup

1. Install Cypress
   npm install cypress --save-dev

2. Open Cypress
   npx cypress open

- Select a browser (Chrome, Edge, etc.)
- Choose the test file to run (add/edit/delete/login)

 Make sure Cypress is set up inside the project folder (cypress directory present)

------------------------------

 Newman API Collection Run

1. Install Newman Globally
   npm install -g newman

2. Install HTML Extra Reporter
   npm install -g newman-reporter-htmlextra

3. Run the Postman Collection
   newman run Automate.postman_collection.json -r htmlextra --reporter-htmlextra-export ./newman/custom-report.html

- Reports will be saved in the /newman folder (auto-generated)




