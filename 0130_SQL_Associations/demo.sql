-- to run \i demo.sql

-- SELECT student_id, title FROM projects
--     WHERE student_id = 2;


-- SELECT course_id, score FROM enrolments
--     WHERE course_id = 1;


-- SELECT * FROM students
--     CROSS JOIN projects;


-- SELECT
--     students.id,
--     first_name,
--     -- projects.id AS project_id,
--     title AS project_title
--   FROM students
--   INNER JOIN projects ON students.id = projects.student_id
-- --   ORDER BY students.first_name;

-- SELECT students.*, courses.title AS course_title, score
--     FROM students
--     INNER JOIN enrolments ON students.id = enrolments.student_id
--     INNER JOIN courses ON enrolments.course_id = courses.id
--     WHERE courses.title ILIKE '%hybrid matrix%';

-- SELECT *
--     FROM courses
--     INNER JOIN enrolments ON courses.id = enrolments.student_id
--     INNER JOIN students ON enrolments.student.id = courses.id

--     -- WHERE students.first_name ILIKE 'Jo%';

-- SELECT courses.title AS course_title
--     FROM students
--     INNER JOIN enrolments ON students.id = enrolments.student_id
--     INNER JOIN courses ON enrolments.course_id = courses.id
--     WHERE students.first_name ILIKE 'Jo%'
--     GROUP BY courses.title;

-- SELECT first_name, last_name, projects.title
--     FROM students 
--     LEFT JOIN projects ON students.id = projects.student_id
--     ORDER BY projects.title DESC;


-- SELECT first_name, last_name, projects.title AS project_title
--   FROM students
--   LEFT JOIN projects ON students.id = projects.student_id
--   WHERE projects.title IS NULL;


-- SELECT courses.title, ROUND(AVG(score)) AS avg_score
--     FROM enrolments
--     INNER JOIN courses ON enrolments.course_id = courses.id
--     GROUP BY courses.title 
--     ORDER BY ROUND(AVG(score)) DESC;

-- SELECT title, count(student_id)
--     FROM courses
--     INNER JOIN enrolments ON courses.id = enrolments.course_id
--     GROUP BY courses.title 
--     HAVING count(student_id) >= 5
--     ORDER BY count(student_id) ASC;
    

-- SELECT courses.title, ROUND(AVG(score)) AS avg_score
--     FROM enrolments
--     INNER JOIN courses ON enrolments.course_id = courses.id
--     GROUP BY courses.title 
--     HAVING (AVG(score)) < 60
--     ORDER BY ROUND(AVG(score)) DESC;

-- SELECT line_items.order_id, ROUND(AVG((price * quantity))) AS total_avg_price
--     FROM line_items
--     INNER JOIN orders ON orders.id = line_items.order_id
--     WHERE orders.completed_on > '2016-01-01' AND orders.completed_on < '2016-01-31'
--     GROUP BY line_items.order_id
--     ORDER BY line_items.order_id;

    -- GROUP BY (price * quantity), orders.completed_on;
    -- WHERE created_at BETWEEN '2016-01-01' AND '2016-01-31';  
    -- GROUP BY (price * quantity);

-- -- Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.

-- select name, (summed + remaining) as past_present_inventory
-- from (
--    select products.name as name, SUM(quantity) AS summed, products.remaining_quantity AS remaining
--     from line_items 
--     inner join products on line_items.product_id = products.id 
--     group by products.name, products.remaining_quantity
-- )
-- AS total_count
-- ORDER BY (summed + remaining) DESC;


-- -- Find the average order total price for all the orders in the system

-- SELECT AVG(total_avg_price) FROM (
--     SELECT line_items.order_id, ROUND(SUM((price * quantity))) AS total_avg_price
--         FROM line_items
--         INNER JOIN orders ON orders.id = line_items.order_id
--         GROUP BY line_items.order_id
--         ORDER BY line_items.order_id
-- ) AS all_total;

-- Select all the products that have been purchased in the last 12 months.

-- SELECT products.name FROM line_items
--     INNER JOIN products on line_items.product_id = products.id
--     INNER JOIN orders on line_items.order_id = orders.id
--     WHERE orders.completed_on > '2018-01-30' 
--     AND orders.completed_on IS NOT NULL
--     GROUP by products.name;

-- -- Select the top 10 products in terms of last year's gross sales.

-- SELECT products.name, SUM(line_items.price * quantity) as sales
--     FROM line_items
--     INNER JOIN products ON products.id = line_items.product_id
--     INNER JOIN orders ON line_items.order_id = orders.id
--     WHERE orders.completed_on > '2017-01-01' 
--     AND orders.completed_on < '2018-01-01'
--     GROUP BY products.name
--     ORDER BY SUM(line_items.price * quantity) DESC
--     LIMIT 10;


-- Select all the products that weren't purchased during the last 12 months.
 
-- SELECT products.name from line_items
-- INNER JOIN products ON products.id = line_items.product_id
-- WHERE line_items.product_id NOT IN(
-- SELECT line_items.product_id FROM line_items
--     INNER JOIN products on line_items.product_id = products.id
--     INNER JOIN orders on line_items.order_id = orders.id
--     WHERE orders.completed_on > '2018-01-30' 
--     AND orders.completed_on IS NOT NULL
--     GROUP by line_items.product_id
-- );


select name from products;