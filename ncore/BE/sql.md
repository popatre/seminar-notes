# SQL

## Part 1

```sql
DROP DATABASE IF EXISTS imdb_2;
CREATE DATABASE imdb_2;
```

## Part 2

```sql

-- EXAMPLE ONLY - build up in seminar
\c imdb_2

DROP TABLE IF EXISTS films;

-- students to choose appropriate data types
CREATE TABLE films (
    film_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    director_name VARCHAR(200) NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

```

## Part 3

```sql
-- EXAMPLE ONLY - build up in seminar
\c imdb_2

-- insert data into film table
INSERT INTO films (title, director_name, release_date, rating) VALUES
    ('Inception', 'Christopher Nolan', '2010-07-16', 9),
    ('La La Land', 'Damien Chazelle', '2016-12-09', 8),
    ('The Shawshank Redemption', 'Frank Darabont', '1994-09-10', 10),
    ('Jurassic Park', 'Steven Spielberg', '1993-06-11', 8),
    ('Leprechaun', 'Mark Jones', '1993-01-08', 3),
    ('Seven', 'David Fincher', '1995-09-22', 9),
    ('Interstellar', 'Christopher Nolan', '2014-11-05', 8),
    ('Barbie', 'Greta Gerwig', '2023-07-21', 8),
    ('The Room', 'Tommy Wiseau', '2003-06-27', 2);

    RETURNING *
```

## Part 4

```sql
-- Focus: syntax, conditional clauses, and ordering of statements
-- AS, WHERE, AND, OR, NOT, UPDATE, DELETE

-- Selecting with AS to alias column names
SELECT title AS movie_title, director_name AS director FROM films;

-- Selecting movies released after 2000 with a rating greater than 7
SELECT * FROM films WHERE release_date > '2000-01-01' AND rating > 7;

-- Selecting movies with a rating of 10 or released before 2000
SELECT * FROM films WHERE rating = 10 OR release_date < '2000-01-01';

-- Selecting movies not directed by Christopher Nolan
SELECT * FROM films WHERE NOT director_name = 'Christopher Nolan';

-- Updating the rating of the movie 'The Room'
UPDATE films SET rating = 1 WHERE title = 'The Room';

-- Deleting movies with a rating less than 5
DELETE FROM films WHERE rating < 5;


-- EXTRA - group by
SELECT director_name, AVG(rating) AS avg_rating
FROM films
GROUP BY director_name;

-- The HAVING clause is used in conjunction with the GROUP BY clause to filter the results of a grouped query. It allows you to specify a condition for the groups produced by the GROUP BY clause. Here's an example:

-- Usage with Aggregates:

-- WHERE: You use the WHERE clause for conditions on non-aggregated columns, applying to individual rows.
-- HAVING: The HAVING clause is used for conditions on aggregated columns, such as those produced by aggregate functions like AVG, SUM, COUNT, etc.

SELECT director_name, AVG(rating) AS avg_rating
FROM films
GROUP BY director_name
HAVING AVG(rating) > 7;

```
