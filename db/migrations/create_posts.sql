DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    body VARCHAR(500) NOT NULL,
    date VARCHAR(20) NOT NULL,
    author VARCHAR(100)
);