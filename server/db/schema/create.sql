-- Database Schema
-- //This file is used to reset the db, using the command psql -U development -d password_manager < ./db/schema/create.sql

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS passwords CASCADE;

-- create all tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(400) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE passwords (
    id SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    title VARCHAR(45) NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
