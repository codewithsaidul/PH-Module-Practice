-- Active: 1747486928827@@127.0.0.1@5432@ph@public


DROP TABLE users;

DROP TABLE post;

-- create user table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE
);


CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id)  ON DELETE  CASCADE
);


INSERT INTO users (username) VALUES
('akash'),
('batash'),
('sagor'),
('nodi');

INSERT INTO post (title, user_id) VALUES
('Enjoying a sunny day with Akash! ☀️', 2),
('Batash just shared an amazing recipe! 🍲', 1),
('Exploring adventures with Sagor.🌟', 4),
('Nodi''s wisdom always leaves me inspired. 📚', 4),
('Nulls wisdom always leaves me inspired. 📚', Null);

SELECT * FROM users;
SELECT * FROM post;



DELETE FROM users
    WHERE id = 3;









