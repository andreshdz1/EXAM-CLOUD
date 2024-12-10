# Cloud Exam
----

## Project Description

This project is a NestJS application with a PostgreSQL database, containerized using Docker. It provides a basic user management system with CRUD operations and a health check endpoint.

## Author

Andres Hernandez

## Instructions for Running

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd cloud-exam
   ```
3. nstall dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and configure the environment variables containing: 
    > DB_HOST=postgres    
    DB_PORT=5432    
    DB_USER=postgres  
    DB_PASSWORD=mysecretpassword
    DB_NAME=examenCloud

5. Run database migrations (if necessary).
6. Start the application:
   ```bash
    docker-compose up --build
   ```


## Usage

After starting the application, you can interact with the API using tools like Postman or curl.  Endpoints will be documented in a future update.



## Project Structure

- `src/`: Contains the main application code
  - `User/`: User module with controller, entity, service, and DTO
- `docker-compose.yml`: Defines and runs multi-container Docker applications
- `Dockerfile`: Contains instructions for building the Docker image
- `init.sql`: SQL script for initializing the database
- `.env`: Environment variables configuration
- `package.json`: Project dependencies and scripts
