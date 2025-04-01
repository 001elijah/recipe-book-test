# Test Task Application

This project contains separate applications for the backend and frontend. Follow the instructions below to set up and run each.

---

## **Backend**

The backend is located in the `backend` folder.

### Prerequisites:
- Node.js (version 20+)
- yarn

### Running the Backend Server
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Create a `.env` file in the `backend` folder. Include the required environment variables:
   ```
   MEALDB_BASE_URL=https://www.themealdb.com/api/json/v1/1
   PORT=3001
   ```
4. Run the server:
   ```bash
   yarn start
   ```

The backend will start on `http://localhost:3001` (default, configurable in `.env`).

---

## **Frontend**

The frontend is located in the `frontend` folder and is built using **Next.js**.

### Prerequisites:
- Node.js (version 20+)
- yarn

### Running the Frontend Server
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Create a `.env` file in the `frontend` folder. Add the required environment variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```
4. Run the development server:
   ```bash
   yarn run dev
   ```

The frontend will start on `http://localhost:3000` by default (configurable).

### Building for Production:
To build the frontend for production:
1. Build the application:
   ```bash
   yarn run build
   ```
2. Start the production server:
   ```bash
   yarn run start
   ```

The production server will also run on `http://localhost:3000` by default.

---

**Note:** Ensure that the frontend and backend `.env` files have appropriate environment variables configured before starting the servers.

---

## License

This project is licensed for testing purposes.
