# Project Documentation: Data Search Application

## Overview
The Data Search Application is a web-based platform designed to facilitate searching and uploading user data. It allows users to search for specific user data based on various parameters such as name, age, email, country, or mobile number. Additionally, it provides functionality for uploading data files containing user information.

## Features
1. **Search Functionality**:
   - Users can search for user data by entering specific parameters such as name, age, email, country, or mobile number.
   - The search results are displayed in a tabular format, providing comprehensive information about the users that match the search criteria.

2. **Upload Functionality**:
   - Users can upload data files containing user information using the application.
   - Supported file formats MS word docx format (eg: file.docx).
   - Upon successful upload, the data is processed and stored in the backend database for future retrieval and analysis.
   - It will start reading from third line.

3. **User-Friendly Interface**:
   - The application features a clean and intuitive user interface, making it easy for users to navigate and interact with the platform.
   - Various UI components such as buttons, forms, and tables are utilized to enhance user experience and facilitate smooth interaction.

4. **Error Handling**:
   - The application includes robust error handling mechanisms to handle unexpected scenarios gracefully.
   - Errors related to data search, file upload, or backend communication are displayed to users in a clear and informative manner, guiding them on how to proceed.

## Technologies Used
### Frontend
- React.js: A JavaScript library for building user interfaces.
- Ant Design: A React UI library with a set of high-quality components and themes.
- React Router: A routing library for React applications, enabling navigation between different components/pages.

### Backend
- Spring Boot: A Java-based framework for building robust and scalable web applications.
- Hibernate: An object-relational mapping (ORM) tool for Java applications, used for database interaction.
- Spring Data JPA: A part of the Spring Data project that makes it easy to implement JPA-based repositories.
- PostgreSQL: A relational database management system used for storing user data.

### Other Tools and Libraries
- Fetch API: A modern browser-based API for making HTTP requests from the frontend to the backend.
- FormData: An object used to construct key/value pairs that represent form fields and their values, which can be easily sent in HTTP requests.
- ESLint: A static code analysis tool for identifying problematic patterns in JavaScript code.

## Development Environment
- Visual Studio Code (VS Code) and IntelliJ IDEA are used for development.
- Git version control system is used for managing source code changes.

## Paths
Two paths are added to the application:
- `/`: This path is used for data retrieval.
- `/upload`: This path is used for uploading data. (Only word documents)

## Setting Up the Frontend
1. **Clone the Repository**:
   - Clone the frontend repository of the Data Search Application from the version control system (e.g., GitHub) to your local machine using Git:
     ```
     git clone <repository_url>
     ```

2. **Navigate to the Frontend Directory**:
   - Open a terminal and change the directory to the frontend folder of the cloned repository:
     ```
     cd search-app
     ```

3. **Install Dependencies**:
   - Install the required dependencies for the frontend using npm or yarn:
     ```
     npm install
     ```

4. **Configure Environment Variables**:
   - Create a `.env` file in the root of the frontend directory.
   - Define any necessary environment variables in the `.env` file, such as API endpoint URLs or authentication tokens.

5. **Run the Development Server**:
   - Start the development server to run the frontend application locally:
     ```
     npm start
     ```
   - The frontend application will be accessible in your browser at http://localhost:3000.

## Setting Up the Backend
1. **Clone the Repository**:
   - Clone the backend repository of the Data Search Application from the version control system (e.g., GitHub) to your local machine using Git:
     ```
     git clone <repository_url>
     ```

2. **Navigate to the Backend Directory**:
   - Open a terminal and change the directory to the backend folder of the cloned repository:
     ```
     cd searchApp
     ```

3. **Install Dependencies**:
   - Install the required dependencies for the backend using Maven:
     ```
     mvn install
     ```

4. **Configure Database**:
   - Set up a PostgreSQL or any other compatible database instance.
   - Create a new database for the application and configure the database connection properties in the `application.properties` file located in the `src/main/resources` directory.

5. **Run the Application**:
   - Start the backend application by running the main class or using Maven:
     ```
     mvn spring-boot:run
     ```
   - The backend application will start and listen for incoming requests on the configured port (usually port 8080 by default).

## Conclusion
The Data Search Application provides users with a powerful tool for searching and uploading user data, offering a seamless and intuitive user experience. With its robust features, modern technologies, and user-friendly interface, the application aims to streamline data management processes and empower users to make informed decisions based on data analysis and insights.