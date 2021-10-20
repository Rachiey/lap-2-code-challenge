DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
    id serial PRIMARY KEY,
    pseudonym varchar(100) NOT NULL
);