CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO users(name, email) 
VALUES('MAIK','maik@email.com'),
('andres','andres@email.com');
