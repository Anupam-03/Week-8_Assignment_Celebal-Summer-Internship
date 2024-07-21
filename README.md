# Week-8_Assignment_Celebal-Summer-Internship
This project enhances an Express.js app by adding advanced features such as file uploading, integration with the NewsAPI for fetching the latest news, and robust error handling. The application also includes minimal styling for a better user experience.

## Features

- **User Authentication**: Secure user registration and login.
- **File Uploading**: Users can upload files to the server.
- **News Integration**: Fetch and display the latest news using the NewsAPI.
- **Error Handling**: Proper error handling throughout the application.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Anupam-03/Week-8_Assignment_Celebal-Summer-Internship.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd Week-8_Assignment_Celebal-Summer-Internship
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a `.env` file in the root directory with the following contents**:
   ```plaintext
   PORT=8080
   NEWS_API_KEY=YOUR_NEWS_API_KEY
   ```

   Replace `YOUR_NEWS_API_KEY` with your actual API key from NewsAPI.

## Usage

1. **Start the server**:
   ```bash
   npm start
   ```

2. **Endpoints**:
   - **Register**: `POST /register` - Register a new user.
   - **Login**: `POST /login` - Login and receive an authentication token.
   - **Upload File**: `POST /upload` - Upload a file to the server.
   - **News**: `GET /news` - Fetch and display the latest news.
   - **Error Handling**: Proper error responses are implemented.

3. **Access the application**:
   - Open `http://localhost:8080` in your web browser.

## Demo

### Home Page

- **Before Login**
  
  ![image](https://github.com/user-attachments/assets/63271a57-b07c-4efc-ad2f-3fbb139d3e7d)

  
- **After Login**
  
  ![image](https://github.com/user-attachments/assets/90c5982a-d2ab-4c6d-ad23-fe83dcefba0a)


### User Authentication

- **Register a new user**:
  Send a `POST` request to `/register` with user details.

  ![image](https://github.com/user-attachments/assets/e29885bd-f022-4a3b-bd29-8a5536fd7e3a)


- **Login**:
  Send a `POST` request to `/login` with user credentials to receive a JWT token.

  ![image](https://github.com/user-attachments/assets/b6c5f10c-cc3b-4cc7-a045-b16d79319069)


### File Upload

- **Upload a file**:
  Use the `/upload` endpoint to upload files. You can use tools like Postman or cURL to test file uploads.

  ![image](https://github.com/user-attachments/assets/01e2ea34-e1e2-4949-8c38-31cab48bd73e)


### News Integration

- **View Latest News**:
  Visit `/news` to see the latest news fetched from the NewsAPI.

  ![image](https://github.com/user-attachments/assets/7f9d4cb3-3ddd-4ff4-8678-76d93cf8dbd3)

