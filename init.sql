-- init.sql
-- Create Users table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- add user admin
INSERT INTO users (username, email, password) VALUE('admin', 'admin@gmail.com', '1234');

-- Create Todos table
CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  isCompleted BOOLEAN DEFAULT FALSE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE
);

-- Trigger to update updatedAt column in Users table before update
CREATE TRIGGER before_user_update BEFORE
UPDATE ON users FOR EACH ROW
SET
  NEW.updatedAt = CURRENT_TIMESTAMP;

-- Trigger to update updatedAt column in Todos table before update
CREATE TRIGGER before_todo_update BEFORE
UPDATE ON todos FOR EACH ROW
SET
  NEW.updatedAt = CURRENT_TIMESTAMP;
