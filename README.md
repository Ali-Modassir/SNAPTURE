
# Snapture

Snapture is a free social networking service built around sharing visual content among users from the same college or institute. It provides a platform for users to connect, share posts, and communicate with each other. This readme.md file provides an overview of the Snapture web application, including its features, installation instructions, and technology stack.

## Features

1.  **User Authentication**: Snapture includes a robust user authentication system with the following features:
    
    -   Two-factor authentication for enhanced security.
    -   Forgot password functionality with email confirmation and password reset.
    -   Nodemailer API integration for sending confirmation, success, or any other kind of email.
2.  **API Authorization**: Snapture ensures secure access to its APIs through JWT (JSON Web Token) authorization. Only authorized users can interact with the application's APIs.
    
3.  **Session Management**: JWT is used for session management in Snapture. It helps maintain user sessions and provides secure access to different parts of the application.
    
4.  **OAuth Authentication**: Snapture supports OAuth authentication through Google and Microsoft. Users can log in to the application using their Google or Microsoft accounts, making the onboarding process more convenient.
    
5.  **Onboarding Process**: Snapture has an onboarding process where users are prompted to provide some personal information. This information helps create a personalized user experience and improves the social networking aspect of the application.
    
6.  **Dashboard Tabs**:
    
    -   **Home**: The home tab displays posts from friends, as well as news cards fetched from the NY Times news API. Users can stay updated with the latest news and interact with posts from their friends.
    -   **Message**: The message tab provides a real-time messaging service implemented using Firebase Realtime Database. Users can communicate with each other in real-time.
    -   **My Profile**: The My Profile tab showcases a user's own posts, followers, and following. Users can manage their profile information and view their own activity.
    -   **Find Friends**: The Find Friends tab displays a list of friends from the user's college. It helps users connect with others who are part of the same institution.
    -   **Feedback**: The Feedback tab contains a form for users to submit queries, suggestions, or any kind of feedback to the Snapture team.

## Technology Stack

Snapture is built using the following technologies:

-   **Frontend**: React.js
-   **Backend**: Node.js with Express.js
-   **Database**: MongoDB
-   **Cloud Storage**: Cloudinary
-   **Email Service**: Nodemailer
-   **Real-time Messaging**: Firebase Realtime Database

## Prerequisites

Before running Snapture, ensure that you have the following software installed:

-   Node.js: Make sure you have Node.js installed on your system. You can download it from the official Node.js website and follow the installation instructions for your operating system.
    
-   MongoDB: Install MongoDB and make sure it is running on your local machine or provide the connection details for a remote MongoDB database.

## Installation

To install and run Snapture locally, follow these steps:

1.  Clone the repository:
    ```sh    
    git clone https://github.com/Ali-Modassir/SNAPTURE.git
    ```
    
2.  Navigate to the cloned repository:
     
    `cd snapture` 
    
3.  Install the dependencies for the frontend:
    
    ```sh    
    cd master-frontend
    npm install
    ``` 
    
4.  Install the dependencies for the backend:
        
    ```sh    
    cd ../master-backend
    npm install
    ```
    
## Configuration

Snapture requires configuration for various services. Here are the steps to set up the required configuration:

### Backend Configuration

1.  Open the `master-backend` directory.
    
2.  Create a `.env` file in this directory.
    
3.  Set the following environment variables in the `.env` file:
    
    -   `DB_URL`: The MongoDB connection string.
    
    - `CLIENT_ORIGIN` : Frontend deploy link.  For local development, this would be `http://localhost:3000`.
                
    -   `JWT_KEY`: A secret key used for JWT token generation and validation.
            
    -   `MAIL_USER`: The email address used to send emails using Nodemailer.
        
    -   `MAIL_PASS`: The password for the email address used for sending emails.
        
    -   `FIREBASE_API_KEY`: API key for Firebase Realtime Database.
        
    -   `NY_TIMES_KEY`: API key of NY Times news API.
    
    - `NY_TIMES_SECRET`: API Secret key for accessing NY Times API Key. 
        
    -   `GOOGLE_CLIENT_ID`: Google OAuth client ID (if applicable).
        
    -   `GOOGLE_CLIENT_SECRET`: Google OAuth client secret (if applicable).
        
    -   `MICROSOFT_CLIENT_ID`: Microsoft OAuth client ID (if applicable).
        
    -   `MICROSOFT_CLIENT_SECRET`: Microsoft OAuth client secret (if applicable).

	- `CLOUDINARY_API_KEY`: API Key for Cloudinary database.

	- `CLOUDINARY_API_SECRET`: API Secret for accessing Cloudinary database API key.

	- `CLOUDINARY_CLOUD_NAME`: Cloudinary database name.
        
4.  Save the `.env` file.

### Frontend Configuration

1.  Open the `master-frontend` directory.
    
2.  Create a `.env` file in this directory.
    
3.  Set the following environment variables in the `.env` file:
    
    -   `REACT_APP_API_URL`: The URL where the backend server is running. For local development, this would be `http://localhost:8000`.
4.  Save the `.env` file.

## Running Snapture

After completing the configuration steps, you can now run Snapture locally.

1.  Start the backend server:
	```sh
	cd master-backend 
	npm start
	```
2. Start the frontend development server:
	```sh
	cd ../master-frontend 
	npm start
	```
3. Access Snapture in your browser at `http://localhost:3000`.

## Troubleshooting

If you encounter any issues while installing or running Snapture, please check the following:

-   Make sure all the required dependencies are installed.
    
-   Ensure that MongoDB is running and accessible.
    
-   Double-check your environment variable configurations.
    
-   Verify that the ports used by the backend server (default: 8000) and the frontend development server (default: 3000) are not in use by other applications.
    

If the issue persists, please refer to the project's issue tracker on GitHub or open a new issue for assistance.

## Contributing

Contributions to Snapture are welcome! If you'd like to contribute, please follow the steps below:

1.  Fork the repository on GitHub.
    
2.  Clone your forked repository to your local machine.
    
3.  Create a new branch for your feature or bug fix.
    
4.  Implement your changes, following the project's coding standards.
    
5.  Commit your changes with descriptive commit messages.
    
6.  Push your branch to your forked repository on GitHub.
    
7.  Submit a pull request to the `master-frontend`  or `master-backend` branch of the Snapture repository.
    

Please ensure your code is well-tested and includes appropriate documentation.
