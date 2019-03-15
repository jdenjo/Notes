-- SQL: BASICS

-- Commnets

-- <- A single comment

/*
  <- A multi-line comment
*/

-- CREATING A TABLE

/*CREATE TABLE cars (
    id BIGSERIAL,
    make VARCHAR(50),
    doors INTEGER,
    description TEXT
);
*/

/*
INSERT INTO "students"
  ("first_name", "last_name", "email", "phone_number")
  VALUES
  ('Jon', 'Snow', 'js@winterfell.gov', '778.994.8776');

INSERT INTO "students"
  ("first_name", "last_name", "email", "phone_number")
  VALUES
  ('Cersei', 'Baratheon', 'cersei@kingslanding.com', '778.994.9999')
  RETURNING *;

  */

-- SELECT id, first_name
--   FROM students
--   WHERE id > 100 AND id < 110;

-- SELECT id, first_name
--   FROM students
--   WHERE id BETWEEN 100 AND 110;

-- SELECT id, first_name, last_name
--     FROM students
--     WHERE first_name ILIKE '%nn%'
--     OR last_name ILIKE '%nn%';


-- SELECT id, first_name, last_name, age
--     FROM students
--     ORDER BY age DESC, last_name DESC;

-- SELECT id, first_name, last_name, age
--   FROM students
--   WHERE age IS NOT NULL
--   ORDER BY age DESC, last_name ASC
--   LIMIT 25; -- First 25 rows only



SELECT id, first_name, age
  FROM students
  ORDER BY age ASC
  LIMIT 10
  OFFSET 10;