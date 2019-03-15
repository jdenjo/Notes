-- Select the first 10 students whose ages are between 35 and 45.

SELECT * FROM students
WHERE Age < 45 and Age > 35
LIMIT 10;

-- Select the third set of 10 students whose ages are more than 25 and whose first names contain `le`. The students must be ordered by their id in ascending order then first name in a descending order.

SELECT * FROM students
    WHERE Age > 25 AND first_name ILIKE '%le%'
    ORDER BY id ASC
    LIMIT 10
    OFFSET 3;

-- Select the 10 oldest students (You should ignore students with an age that is `NULL`).
SELECT * FROM students
    WHERE Age IS NOT NULL
    ORDER BY Age DESC 
    LIMIT 10;

-- Select all students with age 45 whose last names contain the letter n.

SELECT * FROM students
    WHERE Age = 45 AND
    last_name ILIKE '%n%';

-- From the products table:

-- Select all the products that are on sale.

SELECT COUNT(*) FROM products 
    WHERE sale_price < price;

-- Select all the products that are on sale and have remaining items in stock ordered by the sale price in ascending order.
SELECT * FROM products 
    WHERE sale_price < price AND
    remaining_quantity > 0
    ORDER BY sale_price ASC;

-- Select all the products priced between 25 and 50 (regular price) and that are on sale.

SELECT * FROM products 
    WHERE sale_price < price AND
    price < 50 AND
    price >25;

-- 48 rows